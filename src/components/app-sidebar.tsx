import { Calendar, Home, Inbox, Search, Settings, User, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"
import { Link } from "react-router"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "User",
    url: "/user",
    icon: User,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar({ children } : { children: React.ReactNode }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#e40404] text-3xl font-bold my-4">Thelicham</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon size={24} /> 
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

// import React, { ReactNode } from 'react';

// interface AppSidebarProps {
//   children: ReactNode;
// }

// export const AppSidebar: React.FC<AppSidebarProps> = ({ children }) => {
//   return (
//     <div>
//       {/* Sidebar content */}
//       {children}
//     </div>
//   );
// };