import { PrismaClient } from "../lib/generated/prisma/client"

const prisma = new PrismaClient()

async function seed() {
  const existing = await prisma.user.findUnique({ where: { email: "admin@zervi.com" } })
  if (existing) {
    console.log("User exists:", existing.name)
  } else {
    const user = await prisma.user.create({
      data: {
        name: "Admin User",
        email: "admin@zervi.com",
        role: "admin",
        department: "Management",
        status: "active",
      },
    })
    console.log("Created user:", user.name, user.email)
  }
}

seed().then(() => prisma.$disconnect()).catch(console.error)
