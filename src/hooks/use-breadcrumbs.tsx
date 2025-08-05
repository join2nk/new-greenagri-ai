"use client";

import { useMemo } from "react";
import { ReadonlyURLSearchParams } from "next/navigation";
import { ReactNode } from "react";

// Define the breadcrumb item type
export interface BreadcrumbItem {
  label: string;
  href?: string;
  component?: ReactNode;
}

// Define the breadcrumb configuration type
interface BreadcrumbConfig {
  label: string;
  component?: ReactNode;
  children?: Record<string, BreadcrumbConfig>;
  searchParamHandlers?: Record<string, (value: string) => BreadcrumbItem>;
}

// Breadcrumb configuration object
const breadcrumbConfig: Record<string, BreadcrumbConfig> = {
  admin: {
    label: "Dashboard",
    component: <span className="text-no-blue-600">🏠 Dashboard</span>,
    children: {
      analytics: {
        label: "Analytics",
        component: <span className="text-no-green-600">📊 Analytics</span>,
      },
      "contact-form": {
        label: "Contact Forms",
        component: <span className="text-no-purple-600">📧 Contact Forms</span>,
      },
      // "news-letter-list": {
      //   label: "Newsletter List",
      //   component: <span className="text-no-orange-600">📰 Newsletter</span>,
      // },
      // apply: {
      //   label: "Job Applications",
      //   component: <span className="text-no-red-600">👔 Applications</span>,
      // },
      quote: {
        label: "Quote Requests",
        component: <span className="text-no-indigo-600">💰 Quotes</span>,
        searchParamHandlers: {
          id: (value: string) => ({
            label: `Quote #${value}`,
            component: <span className="text-no-indigo-800">💰 Quote #{value}</span>,
          }),
        },
      },
    },
  },
  service: {
    label: "Services",
    component: <span className="text-no-blue-500">⚙️ Services</span>,
    children: {
      "website-development": {
        label: "Website Development",
        component: <span className="text-no-cyan-600">🌐 Web Development</span>,
      },
      "mobile-development": {
        label: "Mobile Development",
        component: <span className="text-no-teal-600">📱 Mobile Development</span>,
      },
      ecommerce: {
        label: "E-commerce",
        component: <span className="text-no-emerald-600">🛒 E-commerce</span>,
      },
      seoptimize: {
        label: "SEO Optimization",
        component: <span className="text-no-yellow-600">🔍 SEO</span>,
      },
      package: {
        label: "Service Packages",
        component: <span className="text-no-pink-600">📦 Packages</span>,
      },
    },
  },
  "about-us": {
    label: "About Us",
    component: <span className="text-no-gray-600">👥 About Us</span>,
  },
  career: {
    label: "Career",
    component: <span className="text-no-violet-600">💼 Career</span>,
  },
  "contact-us": {
    label: "Contact Us",
    component: <span className="text-no-rose-600">📞 Contact</span>,
  },
  privacy: {
    label: "Privacy Policy",
    component: <span className="text-no-slate-600">🔒 Privacy</span>,
  },
  project: {
    label: "Projects",
    component: <span className="text-no-amber-600">🚀 Projects</span>,
  },
  "services-details": {
    label: "Service Details",
    component: <span className="text-no-lime-600">📋 Service Details</span>,
  },
  tmcd: {
    label: "TMCD",
    component: <span className="text-no-cyan-600">🎯 TMCD</span>,
  },
  login: {
    label: "Login",
    component: <span className="text-no-gray-500">🔐 Login</span>,
  },
};

function buildBreadcrumbs(
  pathSegments: string[],
  searchParams: ReadonlyURLSearchParams,
  config: Record<string, BreadcrumbConfig>
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [];
  let currentPath = "";
  let currentConfig = config;

  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    if (!segment) continue;

    currentPath += `/${segment}`;
    const segmentConfig = currentConfig[segment];

    if (segmentConfig) {
      const breadcrumbItem: BreadcrumbItem = {
        label: segmentConfig.label,
        component: segmentConfig.component,
        href: i === pathSegments.length - 1 ? undefined : currentPath,
      };

      breadcrumbs.push(breadcrumbItem);

      // Handle search parameters for the current segment
      if (segmentConfig.searchParamHandlers && i === pathSegments.length - 1) {
        Object.entries(segmentConfig.searchParamHandlers).forEach(([param, handler]) => {
          const value = searchParams.get(param);
          if (value) {
            const extraBreadcrumb = handler(value);
            breadcrumbs.push(extraBreadcrumb);
          }
        });
      }

      // Move to children for next iteration
      currentConfig = segmentConfig.children || {};
    } else {
      // If no config found, create a default breadcrumb
      const defaultLabel = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      breadcrumbs.push({
        label: defaultLabel,
        href: i === pathSegments.length - 1 ? undefined : currentPath,
      });

      // Reset config since we don't have a matching configuration
      currentConfig = {};
    }
  }

  return breadcrumbs;
}

export function useBreadcrumbs(
  pathname: string,
  searchParams: ReadonlyURLSearchParams
): BreadcrumbItem[] {
  return useMemo(() => {
    // Remove leading slash and split path into segments
    const pathSegments = pathname.replace(/^\/+/, "").split("/").filter(Boolean);

    // Filter out route groups like (landing) and (su)
    const cleanSegments = pathSegments.filter(
      (segment) => !segment.startsWith("(") || !segment.endsWith(")")
    );

    if (cleanSegments.length === 0) {
      return [
        {
          label: "Home",
          component: <span className="text-no-blue-600">🏠 Home</span>,
        },
      ];
    }

    return buildBreadcrumbs(cleanSegments, searchParams, breadcrumbConfig);
  }, [pathname, searchParams]);
}

// Export the configuration for potential external use
export { breadcrumbConfig };
