"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  QuoteIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

// import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
// import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "admin",
    email: "m@example.com",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboardIcon,
    },
      {
        title: "Analytics",
        url: "/admin/analytics",
        icon: BarChartIcon,
      },
    {
      title: "Contact Form Entries",
      url: "/admin/contact-form",
      icon: ListIcon,
    },

    {
      title: "Quotes",
      url: "/admin/quote",
      icon: FolderIcon,
    },
    
    // {
    //   title: "NewsLetter List",
    //   url: "/admin/news-letter-list",
    //   icon: ListIcon,
    // },
  


 
  ],

};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/admin">
                {/* <ArrowUpCircleIcon className="h-5 w-5" /> */}
                <span className="text-base font-semibold">Green Agri Corp PVT LTD</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
