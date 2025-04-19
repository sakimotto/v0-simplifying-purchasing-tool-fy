import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: string
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusProps = (status: string) => {
    const normalizedStatus = status.toLowerCase()

    if (
      normalizedStatus === "active" ||
      normalizedStatus === "approved" ||
      normalizedStatus === "delivered" ||
      normalizedStatus === "completed"
    ) {
      return { variant: "success", label: status }
    }

    if (normalizedStatus === "pending" || normalizedStatus === "processing" || normalizedStatus === "in transit") {
      return { variant: "secondary", label: status }
    }

    if (normalizedStatus === "rejected" || normalizedStatus === "expired" || normalizedStatus === "cancelled") {
      return { variant: "destructive", label: status }
    }

    if (normalizedStatus === "low stock") {
      return { variant: "warning", label: status }
    }

    if (normalizedStatus === "inactive") {
      return { variant: "outline", label: status }
    }

    return { variant: "outline", label: status }
  }

  const { variant, label } = getStatusProps(status)

  return (
    <Badge variant={variant as any} className={className}>
      {label}
    </Badge>
  )
}
