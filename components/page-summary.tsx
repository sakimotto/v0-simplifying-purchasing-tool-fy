import type { ReactNode } from "react"

interface PageSummaryProps {
  title: string
  description: ReactNode
}

export function PageSummary({ title, description }: PageSummaryProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
