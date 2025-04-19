import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function RFQListLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="h-9 w-9 rounded-md mr-4" />
            <Skeleton className="h-7 w-48" />
          </div>
          <Skeleton className="h-9 w-28" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardHeader className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full max-w-md" />
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
                <div className="col-span-3">
                  <Skeleton className="h-5 w-32" />
                </div>
                <div className="col-span-2">
                  <Skeleton className="h-5 w-24" />
                </div>
                <div className="col-span-2">
                  <Skeleton className="h-5 w-20" />
                </div>
                <div className="col-span-1">
                  <Skeleton className="h-5 w-16" />
                </div>
                <div className="col-span-2">
                  <Skeleton className="h-5 w-20" />
                </div>
                <div className="col-span-1">
                  <Skeleton className="h-5 w-16" />
                </div>
                <div className="col-span-1 text-right">
                  <Skeleton className="h-5 w-12 ml-auto" />
                </div>
              </div>
              <div className="divide-y">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="grid grid-cols-12 items-center px-4 py-3 text-sm">
                      <div className="col-span-3 space-y-2">
                        <Skeleton className="h-5 w-28" />
                        <Skeleton className="h-4 w-40" />
                      </div>
                      <div className="col-span-2">
                        <Skeleton className="h-5 w-32" />
                      </div>
                      <div className="col-span-2">
                        <Skeleton className="h-5 w-28" />
                      </div>
                      <div className="col-span-1">
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <div className="col-span-2">
                        <Skeleton className="h-5 w-24" />
                      </div>
                      <div className="col-span-1">
                        <Skeleton className="h-6 w-20" />
                      </div>
                      <div className="col-span-1 text-right">
                        <Skeleton className="h-8 w-8 ml-auto rounded-md" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
