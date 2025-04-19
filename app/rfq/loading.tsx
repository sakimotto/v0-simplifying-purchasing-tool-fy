import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function RFQLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Skeleton className="h-9 w-9 rounded-md mr-4" />
          <Skeleton className="h-7 w-48" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent className="space-y-6">
              {[1, 2, 3].map((section) => (
                <div key={section} className="space-y-4">
                  <Skeleton className="h-6 w-48" />
                  <div className="space-y-4">
                    {Array(section === 3 ? 1 : 3)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="space-y-2">
                          <Skeleton className="h-5 w-32" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
