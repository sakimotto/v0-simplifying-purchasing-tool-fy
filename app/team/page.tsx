import { ArrowLeft, Mail, Plus, Search, Shield, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TeamPage() {
  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@zervi.com",
      role: "Admin",
      department: "Sourcing",
      status: "Active",
      avatar: "/placeholder-user.jpg",
      initials: "JD",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.w@zervi.com",
      role: "Manager",
      department: "Quality Control",
      status: "Active",
      avatar: "/placeholder-user.jpg",
      initials: "SW",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.c@zervi.com",
      role: "Buyer",
      department: "Purchasing",
      status: "Active",
      avatar: "/placeholder-user.jpg",
      initials: "MC",
    },
    {
      id: 4,
      name: "Jessica Taylor",
      email: "jessica.t@zervi.com",
      role: "Buyer",
      department: "Purchasing",
      status: "Active",
      avatar: "/placeholder-user.jpg",
      initials: "JT",
    },
    {
      id: 5,
      name: "David Kim",
      email: "david.k@zervi.com",
      role: "Viewer",
      department: "Finance",
      status: "Inactive",
      avatar: "/placeholder-user.jpg",
      initials: "DK",
    },
  ]

  const getRoleBadge = (role: string): "default" | "secondary" | "outline" | "destructive" => {
    switch (role) {
      case "Admin": return "default"
      case "Manager": return "secondary"
      case "Buyer": return "outline"
      case "Viewer": return "outline"
      default: return "outline"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Team Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Invite Member
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search team members by name, email, or role..." className="pl-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Total Members</p>
                    <p className="text-2xl font-bold text-blue-700">5</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-emerald-600">Active</p>
                    <p className="text-2xl font-bold text-emerald-700">4</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Departments</p>
                    <p className="text-2xl font-bold text-purple-700">4</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:border-gray-400 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{member.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Mail className="h-3 w-3" />
                          <span>{member.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {member.department}
                      </Badge>
                      <Badge variant={getRoleBadge(member.role)} className="text-xs">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
