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
