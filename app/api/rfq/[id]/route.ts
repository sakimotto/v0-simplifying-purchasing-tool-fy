import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const rfq = await prisma.rFQ.findUnique({
    where: { id },
    include: { supplier: true, items: { include: { item: true } }, requestedBy: true },
  })
  if (!rfq) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(rfq)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  const rfq = await prisma.rFQ.update({ where: { id }, data: body })
  return NextResponse.json(rfq)
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  await prisma.rFQ.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
