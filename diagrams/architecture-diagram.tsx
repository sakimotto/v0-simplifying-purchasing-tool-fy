"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ArchitectureDiagrams() {
  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold mb-6">Zervi Sourcing App - Architecture Diagrams</h1>

      <Tabs defaultValue="app-architecture" className="w-full">
        <TabsList className="mb-4 w-full flex flex-wrap h-auto">
          <TabsTrigger value="app-architecture" className="flex-1">
            Application Architecture
          </TabsTrigger>
          <TabsTrigger value="component-relationships" className="flex-1">
            Component Relationships
          </TabsTrigger>
          <TabsTrigger value="data-flow" className="flex-1">
            Data Flow
          </TabsTrigger>
          <TabsTrigger value="user-flow" className="flex-1">
            User Flow
          </TabsTrigger>
          <TabsTrigger value="state-management" className="flex-1">
            State Management
          </TabsTrigger>
        </TabsList>

        <TabsContent value="app-architecture">
          <Card>
            <CardHeader>
              <CardTitle>Application Architecture</CardTitle>
              <CardDescription>High-level overview of the application's architecture</CardDescription>
            </CardHeader>
            <CardContent>
              <AppArchitectureDiagram />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="component-relationships">
          <Card>
            <CardHeader>
              <CardTitle>Component Relationships</CardTitle>
              <CardDescription>How key components relate to each other</CardDescription>
            </CardHeader>
            <CardContent>
              <ComponentRelationshipsDiagram />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data-flow">
          <Card>
            <CardHeader>
              <CardTitle>Data Flow</CardTitle>
              <CardDescription>How data flows through the application</CardDescription>
            </CardHeader>
            <CardContent>
              <DataFlowDiagram />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="user-flow">
          <Card>
            <CardHeader>
              <CardTitle>User Flow</CardTitle>
              <CardDescription>Typical user journeys through the application</CardDescription>
            </CardHeader>
            <CardContent>
              <UserFlowDiagram />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="state-management">
          <Card>
            <CardHeader>
              <CardTitle>State Management</CardTitle>
              <CardDescription>How state is managed across the application</CardDescription>
            </CardHeader>
            <CardContent>
              <StateManagementDiagram />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AppArchitectureDiagram() {
  return (
    <div className="overflow-auto">
      <div className="min-w-[600px] p-4">
        <div className="flex flex-col items-center">
          <DiagramNode label="Client Browser" type="client" />
          <DiagramArrow />
          <DiagramNode label="Next.js Frontend" type="frontend" />

          <div className="grid grid-cols-4 gap-4 w-full mt-4">
            <div className="flex flex-col items-center">
              <DiagramNode label="UI Components" type="component" />
              <DiagramArrow />
              <div className="grid grid-cols-2 gap-2 w-full">
                <DiagramNode label="shadcn/ui" type="subcomponent" size="small" />
                <DiagramNode label="Custom" type="subcomponent" size="small" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <DiagramNode label="Page Components" type="component" />
              <DiagramArrow />
              <DiagramNode label="App Router Pages" type="subcomponent" size="small" />
            </div>

            <div className="flex flex-col items-center">
              <DiagramNode label="State Management" type="component" />
              <DiagramArrow />
              <DiagramNode label="Context Providers" type="subcomponent" size="small" />
            </div>

            <div className="flex flex-col items-center">
              <DiagramNode label="API Services" type="component" />
              <DiagramArrow direction="down" />
            </div>
          </div>

          <DiagramNode label="Future Backend Services" type="backend" className="mt-4" />
          <DiagramArrow />
          <DiagramNode label="Database" type="database" />
        </div>
      </div>
    </div>
  )
}

function ComponentRelationshipsDiagram() {
  return (
    <div className="overflow-auto">
      <div className="min-w-[700px] p-4">
        <div className="flex flex-col items-center">
          <DiagramNode label="MainLayout" type="layout" />

          <div className="flex justify-center w-full mt-4">
            <div className="flex flex-col items-center mr-8">
              <DiagramArrow direction="down" height="short" />
              <DiagramNode label="Sidebar" type="component" />

              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="flex flex-col items-center">
                  <DiagramArrow direction="down" height="short" />
                  <DiagramNode label="SidebarHeader" type="subcomponent" size="small" />
                </div>

                <div className="flex flex-col items-center">
                  <DiagramArrow direction="down" height="short" />
                  <DiagramNode label="SidebarContent" type="subcomponent" size="small" />
                  <DiagramArrow direction="down" height="short" />
                  <DiagramNode label="SidebarMenu" type="subcomponent" size="small" />
                  <DiagramArrow direction="down" height="short" />
                  <DiagramNode label="SidebarMenuItem" type="subcomponent" size="small" />
                </div>

                <div className="flex flex-col items-center">
                  <DiagramArrow direction="down" height="short" />
                  <DiagramNode label="SidebarFooter" type="subcomponent" size="small" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center ml-8">
              <DiagramArrow direction="down" height="short" />
              <DiagramNode label="Page Content" type="component" />
              <DiagramArrow direction="down" height="short" />
              <DiagramNode label="Page-specific Components" type="subcomponent" />

              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="flex flex-col items-center">
                  <DiagramArrow direction="down" height="short" />
                  <DiagramNode label="Cards" type="subcomponent" size="small" />
                </div>

                <div className="flex flex-col items-center">
                  <DiagramArrow direction="down" height="short" />
                  <DiagramNode label="Tables" type="subcomponent" size="small" />
                </div>

                <div className="flex flex-col items-center">
                  <DiagramArrow direction="down" height="short" />
                  <DiagramNode label="Forms" type="subcomponent" size="small" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DataFlowDiagram() {
  return (
    <div className="overflow-auto">
      <div className="min-w-[800px] p-4">
        <div className="flex justify-between items-center">
          <DiagramNode label="User Input" type="input" />
          <HorizontalArrow />
          <DiagramNode label="UI Components" type="component" />
          <HorizontalArrow />
          <DiagramNode label="State Management" type="state" />
          <HorizontalArrow />
          <DiagramNode label="API Services" type="service" />
          <HorizontalArrow />
          <DiagramNode label="Backend API" type="backend" />
          <HorizontalArrow />
          <DiagramNode label="Database" type="database" />
        </div>

        <div className="flex justify-between items-center mt-16">
          <DiagramNode label="UI Updates" type="output" />
          <HorizontalArrow direction="left" />
          <DiagramNode label="UI Components" type="component" />
          <HorizontalArrow direction="left" />
          <DiagramNode label="State Management" type="state" />
          <HorizontalArrow direction="left" />
          <DiagramNode label="API Services" type="service" />
          <HorizontalArrow direction="left" />
          <DiagramNode label="Backend API" type="backend" />
          <HorizontalArrow direction="left" />
          <DiagramNode label="Database" type="database" />
        </div>
      </div>
    </div>
  )
}

function UserFlowDiagram() {
  return (
    <div className="overflow-auto">
      <div className="min-w-[900px] p-4">
        <div className="flex items-center">
          <DiagramNode label="Supplier Listing" type="page" />

          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <HorizontalArrow />
              <DiagramNode label="Search/Filter" type="action" />
            </div>

            <div className="flex items-center mb-4">
              <HorizontalArrow />
              <DiagramNode label="View Supplier Details" type="page" />

              <div className="flex flex-col ml-4">
                <div className="flex items-center mb-2">
                  <HorizontalArrow />
                  <DiagramNode label="Contact Supplier" type="action" size="small" />
                </div>

                <div className="flex items-center mb-2">
                  <HorizontalArrow />
                  <DiagramNode label="Request Quote" type="action" size="small" />
                </div>

                <div className="flex items-center">
                  <HorizontalArrow />
                  <DiagramNode label="Add to Comparison" type="action" size="small" />
                  <HorizontalArrow />
                  <DiagramNode label="Compare Suppliers" type="page" size="small" />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <HorizontalArrow />
              <DiagramNode label="Add New Supplier" type="action" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StateManagementDiagram() {
  return (
    <div className="overflow-auto">
      <div className="min-w-[700px] p-4">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <DiagramNode label="Global State" type="state" />

            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="flex flex-col items-center">
                <DiagramArrow direction="down" height="short" />
                <DiagramNode label="SidebarContext" type="context" size="small" />
              </div>

              <div className="flex flex-col items-center">
                <DiagramArrow direction="down" height="short" />
                <DiagramNode label="ThemeContext" type="context" size="small" />
              </div>

              <div className="flex flex-col items-center">
                <DiagramArrow direction="down" height="short" />
                <DiagramNode label="AuthContext" type="context" size="small" />
              </div>

              <div className="flex flex-col items-center">
                <DiagramArrow direction="down" height="short" />
                <DiagramNode label="Future Contexts" type="context" size="small" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <DiagramNode label="Component Local State" type="state" />

            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="flex flex-col items-center">
                <DiagramArrow direction="down" height="short" />
                <DiagramNode label="useState Hooks" type="hook" size="small" />
              </div>

              <div className="flex flex-col items-center">
                <DiagramArrow direction="down" height="short" />
                <DiagramNode label="useReducer Hooks" type="hook" size="small" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <DiagramNode label="Data Fetching" type="state" />

            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="flex flex-col items-center">
                <DiagramArrow direction="down" height="short" />
                <DiagramNode label="Server Components" type="fetch" size="small" />
              </div>

              <div className="flex flex-col items-center">
                <DiagramArrow direction="down" height="short" />
                <DiagramNode label="Client-side Fetching" type="fetch" size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface DiagramNodeProps {
  label: string
  type:
    | "client"
    | "frontend"
    | "component"
    | "subcomponent"
    | "backend"
    | "database"
    | "layout"
    | "input"
    | "output"
    | "service"
    | "state"
    | "page"
    | "action"
    | "context"
    | "hook"
    | "fetch"
  size?: "normal" | "small"
  className?: string
}

function DiagramNode({ label, type, size = "normal", className = "" }: DiagramNodeProps) {
  const baseClasses = "flex items-center justify-center rounded-md border shadow-sm font-medium text-center"

  const typeClasses = {
    client: "bg-blue-50 border-blue-200 text-blue-700",
    frontend: "bg-indigo-50 border-indigo-200 text-indigo-700",
    component: "bg-purple-50 border-purple-200 text-purple-700",
    subcomponent: "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700",
    backend: "bg-green-50 border-green-200 text-green-700",
    database: "bg-amber-50 border-amber-200 text-amber-700",
    layout: "bg-rose-50 border-rose-200 text-rose-700",
    input: "bg-cyan-50 border-cyan-200 text-cyan-700",
    output: "bg-teal-50 border-teal-200 text-teal-700",
    service: "bg-emerald-50 border-emerald-200 text-emerald-700",
    state: "bg-orange-50 border-orange-200 text-orange-700",
    page: "bg-sky-50 border-sky-200 text-sky-700",
    action: "bg-violet-50 border-violet-200 text-violet-700",
    context: "bg-red-50 border-red-200 text-red-700",
    hook: "bg-yellow-50 border-yellow-200 text-yellow-700",
    fetch: "bg-lime-50 border-lime-200 text-lime-700",
  }

  const sizeClasses = {
    normal: "px-4 py-3 w-40 h-16 text-sm",
    small: "px-2 py-1 w-32 h-10 text-xs",
  }

  return <div className={`${baseClasses} ${typeClasses[type]} ${sizeClasses[size]} ${className}`}>{label}</div>
}

interface DiagramArrowProps {
  direction?: "down" | "up" | "left" | "right"
  height?: "normal" | "short"
}

function DiagramArrow({ direction = "down", height = "normal" }: DiagramArrowProps) {
  const heightClass = height === "normal" ? "h-8" : "h-4"

  return (
    <div className={`flex justify-center w-full ${heightClass} relative`}>
      <div className="absolute inset-y-0 w-0.5 bg-gray-300"></div>
      <div
        className={`absolute ${direction === "up" ? "top-0" : "bottom-0"} w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent ${direction === "up" ? "border-b-[6px] border-b-gray-300" : "border-t-[6px] border-t-gray-300"}`}
        style={{ marginLeft: "-5px" }}
      ></div>
    </div>
  )
}

interface HorizontalArrowProps {
  direction?: "right" | "left"
}

function HorizontalArrow({ direction = "right" }: HorizontalArrowProps) {
  return (
    <div className="flex items-center w-12 relative">
      <div className="absolute inset-x-0 h-0.5 bg-gray-300"></div>
      <div
        className={`absolute ${direction === "left" ? "left-0" : "right-0"} w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ${direction === "left" ? "border-r-[6px] border-r-gray-300" : "border-l-[6px] border-l-gray-300"}`}
        style={{ marginTop: "-5px" }}
      ></div>
    </div>
  )
}
