import { Home, Lock, Scale, Shield, User, UserRoundCog, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
  SidebarRail,
} from "../ui/sidebar"
import { Link, useLocation } from "react-router-dom"
import { NavUser } from "./nav-user"

// Menu items.
type NavItem = {
  title: string
  url: string
  icon?: any
  items?: NavItem[]
  isActive?: boolean
}

type User = {
  name: string
  email: string
  avatar: string
}

const data: { navMain: NavItem[], user: User } = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://avatars.githubusercontent.com/u/78486724?v=4",
  },
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
    {
      title: "Showcase",
      url: "/showcase",
      icon: Home,
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
  const location = useLocation();

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
                    <SidebarMenuButton className="hover:text-[#e40404]" asChild isActive={location.pathname === item.url}>
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
                            <SidebarMenuSubButton className="hover:text-[#e40404]" asChild isActive={location.pathname === item.url}>
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
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}