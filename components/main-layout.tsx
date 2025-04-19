"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Box,
  ClipboardList,
  FileText,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Tag,
  Truck,
  Users,
} from "lucide-react"

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
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function MainLayout({ children }) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-[auto_1fr]">
        <Sidebar>
          <SidebarHeader className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package className="h-6 w-6" />
              <span>ProcureFlow</span>
            </Link>
            <SidebarTrigger className="ml-auto md:hidden" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/dashboard" passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname === "/dashboard"}>
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/items" passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname === "/items" || pathname.startsWith("/items/")}>
                    <Tag className="h-4 w-4" />
                    <span>Items</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/samples" passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname === "/samples" || pathname.startsWith("/samples/")}>
                    <Box className="h-4 w-4" />
                    <span>Samples</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/rfq/list" passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname.startsWith("/rfq")}>
                    <ClipboardList className="h-4 w-4" />
                    <span>RFQs</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/orders" passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname === "/orders" || pathname.startsWith("/orders/")}>
                    <ShoppingCart className="h-4 w-4" />
                    <span>Orders</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/" passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname === "/" || pathname.startsWith("/supplier/")}>
                    <Truck className="h-4 w-4" />
                    <span>Suppliers</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/documents" passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname === "/documents" || pathname.startsWith("/documents/")}>
                    <FileText className="h-4 w-4" />
                    <span>Documents</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/analytics" passHref legacyBehavior>
                  <SidebarMenuButton isActive={pathname === "/analytics" || pathname.startsWith("/analytics/")}>
                    <BarChart3 className="h-4 w-4" />
                    <span>Analytics</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>

            <SidebarGroup>
              <SidebarGroupLabel>Team</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Link href="/team" passHref legacyBehavior>
                      <SidebarMenuButton>
                        <Users className="h-4 w-4" />
                        <span>Manage Team</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t">
            <div className="flex items-center gap-2 p-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
              </div>
              <Link href="/settings">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Settings</span>
                </Button>
              </Link>
            </div>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  )
}

export default MainLayout
