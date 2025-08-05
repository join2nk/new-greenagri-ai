import { redirect } from "next/navigation";
import React from "react";
import { getUser } from "../actions";
import { AppSidebar } from "@/components/app-sidebar";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive";
// import { DataTable } from "@/components/data-table";
// import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/landing/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// import data from "./data.json";

export default async function AdminPageLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const user = await getUser();
  if (!user) redirect("/login");
  return (
    <SidebarProvider>
      <AppSidebar variant="floating" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 mx-3">
              {children}
              {/* <SectionCards /> */}
              {/* <div className="px-4 lg:px-6"> */}
              {/* <ChartAreaInteractive /> */}
              {/* </div> */}
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
  // return <div>user : {user.username}</div>;
}

