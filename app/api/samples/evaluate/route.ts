import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  const { sampleId, action } = await req.json()
  if (!sampleId || !action) return NextResponse.json({ error: "sampleId and action required" }, { status: 400 })

  const sample = await prisma.sample.findUnique({ where: { id: sampleId } })
  if (!sample) return NextResponse.json({ error: "Sample not found" }, { status: 404 })

  const newStatus = action === "approve" ? "approved" : action === "reject" ? "rejected" : null
  if (!newStatus) return NextResponse.json({ error: "Action must be 'approve' or 'reject'" }, { status: 400 })

  const updated = await prisma.sample.update({
    where: { id: sampleId },
    data: { status: newStatus, evaluationDate: new Date() },
  })

  return NextResponse.json(updated)
}
