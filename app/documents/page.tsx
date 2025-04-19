import { ArrowLeft, Download, FileText, Filter, FolderOpen, Plus, Search, Upload } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DocumentManagement() {
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
            <h1 className="text-xl font-bold">Document Management</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Folder
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search documents by name, type, or supplier..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Document Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Documents</SelectItem>
                  <SelectItem value="contracts">Contracts</SelectItem>
                  <SelectItem value="invoices">Invoices</SelectItem>
                  <SelectItem value="specifications">Specifications</SelectItem>
                  <SelectItem value="certificates">Certificates</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Contracts</p>
                    <p className="text-2xl font-bold text-blue-700">24</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-amber-600">Invoices</p>
                    <p className="text-2xl font-bold text-amber-700">36</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">Specifications</p>
                    <p className="text-2xl font-bold text-purple-700">18</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Certificates</p>
                    <p className="text-2xl font-bold text-green-700">42</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Folders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: "Contracts", count: 24, icon: FileText },
                      { name: "Invoices", count: 36, icon: FileText },
                      { name: "Specifications", count: 18, icon: FileText },
                      { name: "Certificates", count: 42, icon: FileText },
                      { name: "Supplier Documents", count: 15, icon: FolderOpen },
                      { name: "Quality Reports", count: 8, icon: FolderOpen },
                      { name: "Shipping Documents", count: 12, icon: FolderOpen },
                    ].map((folder, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <folder.icon className="h-5 w-5 text-gray-500" />
                          <span>{folder.name}</span>
                        </div>
                        <Badge variant="outline">{folder.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-3">
              <Tabs defaultValue="recent" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="recent">Recent Documents</TabsTrigger>
                  <TabsTrigger value="all">All Documents</TabsTrigger>
                  <TabsTrigger value="shared">Shared With Me</TabsTrigger>
                </TabsList>

                <TabsContent value="recent" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recently Accessed Documents</CardTitle>
                      <CardDescription>Documents you've viewed or edited recently</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            name: "T&K Garment Accessories - Contract 2025.pdf",
                            type: "Contract",
                            size: "2.4 MB",
                            modified: "2 hours ago",
                          },
                          {
                            name: "Woven Labels - Technical Specifications.docx",
                            type: "Specification",
                            size: "1.8 MB",
                            modified: "Yesterday",
                          },
                          {
                            name: "Invoice #8976 - Wuxi Huacan Labels.pdf",
                            type: "Invoice",
                            size: "1.2 MB",
                            modified: "2 days ago",
                          },
                          {
                            name: "OEKO-TEX Certificate - Guangzhou Rocky Metal.pdf",
                            type: "Certificate",
                            size: "3.5 MB",
                            modified: "3 days ago",
                          },
                          {
                            name: "Metal Buttons - Quality Inspection Report.pdf",
                            type: "Report",
                            size: "4.2 MB",
                            modified: "1 week ago",
                          },
                        ].map((doc, i) => (
                          <div key={i} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                            <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center shrink-0">
                              <FileText className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{doc.name}</h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="outline" className="text-xs">
                                      {doc.type}
                                    </Badge>
                                    <span className="text-xs text-gray-500">{doc.size}</span>
                                  </div>
                                </div>
                                <span className="text-xs text-gray-500">{doc.modified}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="all" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>All Documents</CardTitle>
                      <CardDescription>Browse all documents in your repository</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-gray-500">
                        <p>This tab would display all documents with pagination.</p>
                        <p className="text-sm mt-2">Use the search and filters above to find specific documents.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="shared" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shared Documents</CardTitle>
                      <CardDescription>Documents shared with you by team members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8 text-gray-500">
                        <p>No documents have been shared with you yet.</p>
                        <p className="text-sm mt-2">
                          When team members share documents with you, they will appear here.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
