
"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useBreadcrumbs, BreadcrumbItem as BreadcrumbData } from "@/hooks/use-breadcrumbs";

export function SiteHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const breadcrumbs = useBreadcrumbs(pathname, searchParams);

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear border mx-2 mt-2 rounded-lg bg-slate-50">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
         <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
          />
        {/*
        <Link href="/admin">
          <h1 className="text-base font-medium">Admin Dashboard</h1>
        </Link>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        /> */}
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb: BreadcrumbData, index: number) => (
              <BreadcrumbItem key={breadcrumb.href || index}>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>
                    {breadcrumb.component || breadcrumb.label}
                  </BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbLink asChild>
                      <Link href={breadcrumb.href || "#"}>
                        {breadcrumb.component || breadcrumb.label}
                      </Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
