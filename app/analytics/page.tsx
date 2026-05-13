"use client"

import { ArrowLeft, BarChart, LineChart, PieChart, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart as ReBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart as ReLine, Line, PieChart as RePie, Pie, Cell, Legend } from "recharts"

const monthlySpend = [
  { month: "Jan", spend: 12500 }, { month: "Feb", spend: 9800 }, { month: "Mar", spend: 15200 },
  { month: "Apr", spend: 18400 }, { month: "May", spend: 22300 }, { month: "Jun", spend: 16400 },
]

const orderStatus = [
  { name: "Delivered", value: 45, color: "#10b981" }, { name: "Processing", value: 20, color: "#3b82f6" },
  { name: "Shipped", value: 12, color: "#f59e0b" }, { name: "Pending", value: 7, color: "#8b5cf6" },
  { name: "Cancelled", value: 2, color: "#ef4444" },
]

const topSuppliers = [
  { name: "YKK Group", value: 42000 }, { name: "T&K Garment", value: 28500 },
  { name: "Guangzhou Rocky", value: 21200 }, { name: "Wuxi Huacan", value: 18500 },
  { name: "Kam Wah Button", value: 14300 },
]

const categorySpend = [
  { name: "Zippers", value: 38000, color: "#3b82f6" }, { name: "Buttons", value: 26000, color: "#10b981" },
  { name: "Labels", value: 22000, color: "#f59e0b" }, { name: "Threads", value: 15000, color: "#8b5cf6" },
  { name: "Patches", value: 18000, color: "#ef4444" }, { name: "Tape & Cord", value: 9450, color: "#06b6d4" },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
            <h1 className="text-xl font-bold">Analytics</h1>
          </div>
          <Select defaultValue="last30">
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Select period" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="last7">Last 7 days</SelectItem>
              <SelectItem value="last30">Last 30 days</SelectItem>
              <SelectItem value="last90">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-100"><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm font-medium text-blue-600">Total Spend</p><p className="text-2xl font-bold text-blue-700">$128,450</p></div><div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center"><BarChart className="h-6 w-6 text-blue-600" /></div></div></CardContent></Card>
            <Card className="bg-emerald-50 border-emerald-100"><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm font-medium text-emerald-600">Orders</p><p className="text-2xl font-bold text-emerald-700">86</p></div><div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center"><LineChart className="h-6 w-6 text-emerald-600" /></div></div></CardContent></Card>
            <Card className="bg-amber-50 border-amber-100"><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm font-medium text-amber-600">Avg. Order</p><p className="text-2xl font-bold text-amber-700">$1,493</p></div><div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center"><TrendingUp className="h-6 w-6 text-amber-600" /></div></div></CardContent></Card>
            <Card className="bg-purple-50 border-purple-100"><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm font-medium text-purple-600">Categories</p><p className="text-2xl font-bold text-purple-700">6</p></div><div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center"><PieChart className="h-6 w-6 text-purple-600" /></div></div></CardContent></Card>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="spend">Spend Analysis</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card><CardHeader><CardTitle>Monthly Spend</CardTitle></CardHeader><CardContent className="h-80"><ResponsiveContainer width="100%" height="100%"><ReBar data={monthlySpend}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip /><Bar dataKey="spend" fill="#3b82f6" radius={[4,4,0,0]} /></ReBar></ResponsiveContainer></CardContent></Card>
                <Card><CardHeader><CardTitle>Orders by Status</CardTitle></CardHeader><CardContent className="h-80"><ResponsiveContainer width="100%" height="100%"><RePie><Pie data={orderStatus} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">{orderStatus.map((entry, i) => <Cell key={i} fill={entry.color} />)}</Pie><Tooltip /><Legend /></RePie></ResponsiveContainer></CardContent></Card>
                <Card><CardHeader><CardTitle>Top Suppliers</CardTitle></CardHeader><CardContent className="h-80"><ResponsiveContainer width="100%" height="100%"><ReBar data={topSuppliers} layout="vertical"><CartesianGrid strokeDasharray="3 3" /><XAxis type="number" /><YAxis dataKey="name" type="category" width={120} /><Tooltip /><Bar dataKey="value" fill="#10b981" radius={[0,4,4,0]} /></ReBar></ResponsiveContainer></CardContent></Card>
                <Card><CardHeader><CardTitle>Spend by Category</CardTitle></CardHeader><CardContent className="h-80"><ResponsiveContainer width="100%" height="100%"><RePie><Pie data={categorySpend} cx="50%" cy="50%" outerRadius={100} paddingAngle={2} dataKey="value">{categorySpend.map((entry, i) => <Cell key={i} fill={entry.color} />)}</Pie><Tooltip /><Legend /></RePie></ResponsiveContainer></CardContent></Card>
              </div>
            </TabsContent>

            <TabsContent value="spend" className="mt-0">
              <Card><CardHeader><CardTitle>Spend Trend</CardTitle></CardHeader><CardContent className="h-96"><ResponsiveContainer width="100%" height="100%"><ReLine data={monthlySpend}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip /><Line type="monotone" dataKey="spend" stroke="#3b82f6" strokeWidth={2} /></ReLine></ResponsiveContainer></CardContent></Card>
            </TabsContent>

            <TabsContent value="suppliers" className="mt-0">
              <Card><CardHeader><CardTitle>Supplier Performance</CardTitle></CardHeader><CardContent className="h-96"><ResponsiveContainer width="100%" height="100%"><ReBar data={topSuppliers}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="value" fill="#f59e0b" radius={[4,4,0,0]} /></ReBar></ResponsiveContainer></CardContent></Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
