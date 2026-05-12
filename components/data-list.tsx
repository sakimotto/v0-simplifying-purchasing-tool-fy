"use client"

import { ReactNode, useState } from "react"
import { Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export interface FilterTab<T> {
  value: string
  label: string
  filter: (item: T) => boolean
}

interface DataListPageProps<T> {
  title: string
  description?: string
  items: T[]
  tabs: FilterTab<T>[]
  defaultTab?: string
  searchPlaceholder?: string
  searchFields?: (keyof T)[]
  filterOptions?: { value: string; label: string }[]
  filterLabel?: string
  renderItem: (item: T) => ReactNode
  renderEmpty?: (tabValue: string) => ReactNode
  actions?: ReactNode
  backUrl?: string
}

export function DataListPage<T>({
  title,
  description,
  items,
  tabs,
  defaultTab,
  searchPlaceholder = "Search...",
  searchFields,
  filterOptions,
  filterLabel = "Filter",
  renderItem,
  renderEmpty,
  actions,
}: DataListPageProps<T>) {
  const [searchQuery, setSearchQuery] = useState("")

  const filterBySearch = (item: T): boolean => {
    if (!searchQuery.trim() || !searchFields) return true
    const query = searchQuery.toLowerCase()
    return searchFields.some((field) => {
      const value = item[field]
      return typeof value === "string" && value.toLowerCase().includes(query)
    })
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={searchPlaceholder}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {filterOptions && (
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={filterLabel} />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {actions}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={defaultTab || tabs[0]?.value || "all"} className="w-full">
          <TabsList className="mb-4">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => {
            const filteredItems = items.filter(tab.filter).filter(filterBySearch)
            return (
              <TabsContent key={tab.value} value={tab.value} className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>{tab.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {filteredItems.length > 0 ? (
                      <div className="grid gap-4">
                        {filteredItems.map((item, i) => (
                          <div key={i}>{renderItem(item)}</div>
                        ))}
                      </div>
                    ) : renderEmpty ? (
                      renderEmpty(tab.value)
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <p>No items found.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </div>
  )
}
