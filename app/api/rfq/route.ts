import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const rfqs = await prisma.rFQ.findMany({
    orderBy: { createdAt: "desc" },
    include: { supplier: true, items: { include: { item: true } }, requestedBy: true },
  })
  return NextResponse.json(rfqs)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { items, ...rfqData } = body
  const rfq = await prisma.rFQ.create({
    data: { ...rfqData, items: { create: items } },
    include: { supplier: true, items: { include: { item: true } } },
  })
  return NextResponse.json(rfq, { status: 201 })
}
