import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const sample = await prisma.sample.findUnique({
    where: { id },
    include: { item: true, supplier: true, requestedBy: true },
  })
  if (!sample) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(sample)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  const sample = await prisma.sample.update({ where: { id }, data: body })
  return NextResponse.json(sample)
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  await prisma.sample.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
