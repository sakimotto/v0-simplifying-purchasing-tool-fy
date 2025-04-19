import { Search, Filter, Phone, Mail, Globe, MapPin, Download, Star, StarHalf, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10 hidden md:block">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Garment Accessories Suppliers</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Link href="/supplier/add">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Supplier
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search suppliers by name, product, or certification..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Product Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="labels">Labels & Tags</SelectItem>
                  <SelectItem value="buttons">Buttons & Snaps</SelectItem>
                  <SelectItem value="zippers">Zippers</SelectItem>
                  <SelectItem value="patches">Patches & Emblems</SelectItem>
                  <SelectItem value="interlinings">Interlinings</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Suppliers (20)</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
              <TabsTrigger value="contacted">Contacted</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {suppliers.map((supplier) => (
                  <SupplierCard key={supplier.id} supplier={supplier} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="mt-0">
              <div className="text-center py-8 text-gray-500">
                <p>No favorite suppliers yet.</p>
                <p className="text-sm">Click the star icon on a supplier card to add it to your favorites.</p>
              </div>
            </TabsContent>

            <TabsContent value="recent" className="mt-0">
              <div className="text-center py-8 text-gray-500">
                <p>No recently viewed suppliers.</p>
                <p className="text-sm">Suppliers you view will appear here for quick access.</p>
              </div>
            </TabsContent>

            <TabsContent value="contacted" className="mt-0">
              <div className="text-center py-8 text-gray-500">
                <p>No contacted suppliers yet.</p>
                <p className="text-sm">Mark suppliers as contacted to track your communications.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function SupplierCard({ supplier }) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-40 bg-gray-100 flex items-center justify-center p-4 border-b">
        <img
          src={supplier.imageUrl || "/placeholder.svg"}
          alt={supplier.name}
          className="max-h-full max-w-full object-contain"
        />
        <button className="absolute top-2 right-2 text-gray-400 hover:text-yellow-400">
          <Star className="h-5 w-5" />
        </button>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-base">{supplier.name}</h3>
          <div className="flex">
            {[...Array(supplier.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            {supplier.halfStar && <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">{supplier.specialization}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {supplier.certifications.map((cert, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {cert}
            </Badge>
          ))}
        </div>

        <div className="grid gap-2 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
            <span className="text-gray-600 line-clamp-2">{supplier.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gray-400 shrink-0" />
            <span className="text-gray-600">{supplier.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gray-400 shrink-0" />
            <span className="text-gray-600">{supplier.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-gray-400 shrink-0" />
            <a
              href={supplier.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline truncate"
            >
              {supplier.website.replace("https://www.", "")}
            </a>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button size="sm" className="flex-1">
            Contact
          </Button>
          <Link href={`/supplier/${supplier.id}`}>
            <Button size="sm" variant="outline" className="flex-1">
              Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

const suppliers = [
  {
    id: 1,
    name: "T&K Garment Accessories Co.",
    specialization: "Woven labels, wash labels, injection badges",
    certifications: ["OEKO-TEX", "ISO9001", "BSCI"],
    location: "No. 18 Xinxing Rd, Dongguan, Guangdong",
    phone: "+86 769 2289 8765",
    email: "sales@tkaccessories.com",
    website: "https://www.tkaccessories.com",
    imageUrl: "https://i.imgur.com/JQJbZyL.jpg",
    rating: 4,
    halfStar: true,
  },
  {
    id: 2,
    name: "Wuxi Huacan Labels Factory",
    specialization: "Woven labels, leather labels, heat transfer",
    certifications: ["OEKO-TEX", "Sedex"],
    location: "Building 3, No. 999 Changjiang Rd, Wuxi, Jiangsu",
    phone: "+86 510 8521 3578",
    email: "info@huacanlabels.com",
    website: "https://www.huacanlabels.com",
    imageUrl: "https://i.imgur.com/pLvYdZx.jpg",
    rating: 4,
    halfStar: false,
  },
  {
    id: 3,
    name: "Guangzhou Rocky Metal Accessories",
    specialization: "Metal buttons, snaps, rivets",
    certifications: ["SGS", "OEKO-TEX Class I"],
    location: "Room 1008, Yingbin Building, Baiyun District, Guangzhou",
    phone: "+86 20 8623 4589",
    email: "rocky@rockyaccessories.com",
    website: "https://www.rockyaccessories.com",
    imageUrl: "https://i.imgur.com/8Kj3VfT.jpg",
    rating: 5,
    halfStar: false,
  },
  {
    id: 4,
    name: "Kam Wah Button Factory",
    specialization: "Fashion buttons, zippers, metal trims",
    certifications: ["ISO 9002", "BSCI", "HK Q-Mark"],
    location: "8/F, Block B, Hong Kong Industrial Building, HK",
    phone: "+852 2543 8765",
    email: "sales@kamwah.com",
    website: "https://www.kamwah.com",
    imageUrl: "https://i.imgur.com/mN7xG9h.jpg",
    rating: 4,
    halfStar: false,
  },
  {
    id: 5,
    name: "YangXing Embroidery Patch Factory",
    specialization: "Embroidery patches, woven emblems",
    certifications: ["OEKO-TEX", "ISO 9001"],
    location: "No. 88 Xingang Rd, Haizhu District, Guangzhou",
    phone: "+86 20 3401 2987",
    email: "info@yangxing.com",
    website: "https://www.yangxing.com",
    imageUrl: "https://i.imgur.com/L4vV2kD.jpg",
    rating: 3,
    halfStar: true,
  },
  {
    id: 6,
    name: "Hangzhou Fuhan Label Factory",
    specialization: "PVC labels, woven labels, satin ribbons",
    certifications: ["ISO", "OEKO-TEX", "ISO 14001"],
    location: "No. 678 Jianghong Rd, Binjiang District, Hangzhou",
    phone: "+86 571 8667 3214",
    email: "fuhan@fuhanaccessories.com",
    website: "https://www.fuhanaccessories.com",
    imageUrl: "https://i.imgur.com/9pQ3zRw.jpg",
    rating: 4,
    halfStar: false,
  },
  // Remaining suppliers would be added here
]
