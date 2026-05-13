import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST() {
  // Create admin user
  const user = await prisma.user.upsert({
    where: { email: "admin@zervi.com" },
    update: {},
    create: { name: "Admin User", email: "admin@zervi.com", role: "admin", department: "Management" },
  })

  // Create suppliers
  const suppliers = await Promise.all([
    prisma.supplier.upsert({ where: { id: "sup-ykk" }, update: {}, create: { id: "sup-ykk", name: "YKK Group", category: "Zippers & Fasteners", location: "Tokyo, Japan", status: "active", verified: true, rating: 4.8, contactPerson: "Takahiro Miyake", email: "info@ykk.com" } }),
    prisma.supplier.upsert({ where: { id: "sup-tk" }, update: {}, create: { id: "sup-tk", name: "T&K Garment Accessories", category: "Buttons & Trims", location: "Dongguan, China", status: "active", verified: true, rating: 4.7, contactPerson: "Chen Mei", email: "sales@tkgarment.com" } }),
    prisma.supplier.upsert({ where: { id: "sup-huacan" }, update: {}, create: { id: "sup-huacan", name: "Wuxi Huacan Labels", category: "Labels & Tags", location: "Wuxi, China", status: "active", verified: true, rating: 4.0, contactPerson: "Zhang Wei", email: "info@huacanlabels.com" } }),
  ])

  // Create items
  const items = await Promise.all([
    prisma.item.upsert({ where: { sku: "MZ-005-BLK" }, update: {}, create: { sku: "MZ-005-BLK", name: "Metal Zipper #5", category: "Zippers", unitPrice: 0.45, stock: 2500, reorderPoint: 1000, supplierId: "sup-ykk", status: "active" } }),
    prisma.item.upsert({ where: { sku: "BJB-017-ANT" }, update: {}, create: { sku: "BJB-017-ANT", name: "Brass Jean Button 17mm", category: "Buttons", unitPrice: 0.25, stock: 3000, reorderPoint: 1500, supplierId: "sup-tk", status: "active" } }),
    prisma.item.upsert({ where: { sku: "WL-SIZE-S" }, update: {}, create: { sku: "WL-SIZE-S", name: "Woven Label - Size S", category: "Labels", unitPrice: 0.08, stock: 500, reorderPoint: 1000, supplierId: "sup-huacan", status: "low_stock" } }),
  ])

  return NextResponse.json({ user, suppliers, items, message: "Database seeded" })
}
