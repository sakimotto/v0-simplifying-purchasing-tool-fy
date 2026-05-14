import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { supplier: true, items: { include: { item: true } } },
  })
  return NextResponse.json(orders)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { items, ...orderData } = body
  const order = await prisma.order.create({
    data: {
      ...orderData,
      orderNumber: orderData.orderNumber || `ORD-${Date.now()}`,
      items: { create: items },
    },
    include: { supplier: true, items: { include: { item: true } } },
  })
  return NextResponse.json(order, { status: 201 })
}
