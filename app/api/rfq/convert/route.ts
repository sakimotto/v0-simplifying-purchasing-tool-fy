import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  const { rfqId } = await req.json()
  if (!rfqId) return NextResponse.json({ error: "rfqId required" }, { status: 400 })

  const rfq = await prisma.rFQ.findUnique({ where: { id: rfqId }, include: { items: true } })
  if (!rfq) return NextResponse.json({ error: "RFQ not found" }, { status: 404 })
  if (rfq.status !== "completed") return NextResponse.json({ error: "RFQ must be completed before converting" }, { status: 400 })

  const orderItems = rfq.items.map((i) => ({
    itemId: i.itemId,
    quantity: i.quantity,
    unitPrice: rfq.quotedPrice || 0,
    total: (rfq.quotedPrice || 0) * i.quantity,
  }))

  const order = await prisma.order.create({
    data: {
      orderNumber: `ORD-${Date.now()}`,
      supplierId: rfq.supplierId,
      status: "pending",
      paymentStatus: "unpaid",
      paymentTerms: rfq.paymentTerms || "Net 30",
      shippingMethod: rfq.shippingTerms || "Air Freight",
      items: { create: orderItems },
    },
    include: { supplier: true, items: { include: { item: true } } },
  })

  await prisma.rFQ.update({ where: { id: rfqId }, data: { status: "completed" } })

  return NextResponse.json(order, { status: 201 })
}
