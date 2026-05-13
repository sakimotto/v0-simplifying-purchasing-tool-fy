import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const samples = await prisma.sample.findMany({
    orderBy: { createdAt: "desc" },
    include: { item: true, supplier: true, requestedBy: true },
  })
  return NextResponse.json(samples)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const sample = await prisma.sample.create({ data: body })
  return NextResponse.json(sample, { status: 201 })
}
