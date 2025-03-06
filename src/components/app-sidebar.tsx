import { Home, Lock, Scale, Shield, User, UserRoundCog, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar"
import { Link } from "react-router-dom"

// Menu items.
type NavItem = {
  title: string
  url: string
  icon?: any
  items?: NavItem[]
  isActive?: boolean
}

const data: { navMain: NavItem[] } = {
  navMain: [
    {
      title: "User Management",
      url: "/user-management",
      icon: UserRoundCog,
      items: [
        {
          title: "Users",
          url: "/user-management/users",
          icon: Users,
          // isActive: true,
        },
        {
          title: "User",
          url: "/user-management/user",
          icon: User,
        },
      ]
    },
    {
      title: "Permissions Management",
      url: "/permissions-management",
      icon: Scale,
      items: [
        {
          title: "Roles",
          url: "/permissions-management/roles",
          icon: Shield,
        },
        {
          title: "Permissions",
          url: "/permissions-management/permissions",
          icon: Lock,
        },
      ]
    },
    // {
    //   title: "User",
    //   url: "/user",
    //   icon: User,
    // },
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: Search,
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings,
    // },
  ]
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-3xl font-bold text-[#e40404] mt-4 ms-2">Thelicham</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel className="">Thelicham</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link to={item.url}>
                    <SidebarMenuButton className="hover:text-[#e40404]" asChild>
                      <div className="flex">
                        <item.icon size={24} />
                        <span>{item.title}</span>
                      </div>
                    </SidebarMenuButton>
                  </Link>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <Link to={item.url}>
                            <SidebarMenuSubButton className="hover:text-[#e40404]" asChild isActive={item.isActive ? true : false}>
                              <div className="flex">
                                <item.icon size={20} />
                                {item.title}
                              </div>
                            </SidebarMenuSubButton>
                          </Link>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}