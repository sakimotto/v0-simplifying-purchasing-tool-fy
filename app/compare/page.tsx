import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompareSuppliers() {
  // In a real app, you would get the suppliers to compare from query params or state
  const suppliers = [
    {
      id: 1,
      name: "T&K Garment Accessories Co.",
      specialization: "Woven labels, wash labels, injection badges",
      certifications: ["OEKO-TEX", "ISO9001", "BSCI"],
      location: "Dongguan, Guangdong",
      minOrderQuantity: "1,000 pcs",
      leadTime: "20-25 days",
      priceRange: "$0.05-0.15/pc",
      samplingPolicy: "Free for qualified buyers",
      paymentTerms: "30% deposit, 70% before shipment",
      imageUrl: "https://i.imgur.com/JQJbZyL.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Wuxi Huacan Labels Factory",
      specialization: "Woven labels, leather labels, heat transfer",
      certifications: ["OEKO-TEX", "Sedex"],
      location: "Wuxi, Jiangsu",
      minOrderQuantity: "500 pcs",
      leadTime: "15-20 days",
      priceRange: "$0.08-0.20/pc",
      samplingPolicy: "$50 for samples, deducted from order",
      paymentTerms: "50% deposit, 50% before shipment",
      imageUrl: "https://i.imgur.com/pLvYdZx.jpg",
      rating: 4.0,
    },
    {
      id: 3,
      name: "Guangzhou Rocky Metal Accessories",
      specialization: "Metal buttons, snaps, rivets",
      certifications: ["SGS", "OEKO-TEX Class I"],
      location: "Guangzhou",
      minOrderQuantity: "2,000 pcs",
      leadTime: "25-30 days",
      priceRange: "$0.10-0.30/pc",
      samplingPolicy: "Free samples with shipping paid",
      paymentTerms: "30% deposit, 70% before shipment",
      imageUrl: "https://i.imgur.com/8Kj3VfT.jpg",
      rating: 5.0,
    },
  ]

  const comparisonCategories = [
    { name: "Minimum Order", key: "minOrderQuantity" },
    { name: "Lead Time", key: "leadTime" },
    { name: "Price Range", key: "priceRange" },
    { name: "Sampling Policy", key: "samplingPolicy" },
    { name: "Payment Terms", key: "paymentTerms" },
    { name: "Location", key: "location" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Compare Suppliers</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardHeader>
            <CardTitle>Supplier Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-3 bg-gray-50 border-b w-1/4">Criteria</th>
                    {suppliers.map((supplier) => (
                      <th key={supplier.id} className="p-3 border-b bg-gray-50">
                        <div className="flex flex-col items-center">
                          <div className="h-24 w-24 bg-gray-100 rounded-md mb-2 flex items-center justify-center overflow-hidden">
                            <img
                              src={supplier.imageUrl || "/placeholder.svg"}
                              alt={supplier.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="text-center">
                            <div className="font-medium">{supplier.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{supplier.specialization}</div>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b font-medium">Rating</td>
                    {suppliers.map((supplier) => (
                      <td key={supplier.id} className="p-3 border-b text-center">
                        <div className="flex justify-center">
                          <span className="font-medium">{supplier.rating}</span>
                          <span className="text-yellow-400 ml-1">★</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 border-b font-medium">Certifications</td>
                    {suppliers.map((supplier) => (
                      <td key={supplier.id} className="p-3 border-b">
                        <div className="flex flex-wrap justify-center gap-1">
                          {supplier.certifications.map((cert, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  {comparisonCategories.map((category) => (
                    <tr key={category.key}>
                      <td className="p-3 border-b font-medium">{category.name}</td>
                      {suppliers.map((supplier) => (
                        <td key={supplier.id} className="p-3 border-b text-center">
                          {supplier[category.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <Button variant="outline">Add More Suppliers</Button>
              <Button>Request Quotes From All</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
