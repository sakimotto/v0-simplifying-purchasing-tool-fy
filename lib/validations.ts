import { z } from "zod"

export const supplierSchema = z.object({
  name: z.string().min(1, "Company name is required"),
  category: z.string().optional(),
  specialization: z.string().optional(),
  location: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  contactPerson: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
  status: z.enum(["active", "pending", "inactive"]).default("active"),
  verified: z.boolean().default(false),
  minOrderQty: z.number().int().positive().optional(),
  leadTime: z.string().optional(),
  paymentTerms: z.string().optional(),
  samplingPolicy: z.string().optional(),
  certifications: z.string().optional(),
  notes: z.string().optional(),
  imageUrl: z.string().optional(),
})

export const itemSchema = z.object({
  sku: z.string().min(1, "SKU is required"),
  customerSku: z.string().optional(),
  name: z.string().min(1, "Item name is required"),
  category: z.string().optional(),
  subcategory: z.string().optional(),
  description: z.string().optional(),
  unitPrice: z.number().min(0).default(0),
  currency: z.string().default("USD"),
  stock: z.number().int().min(0).default(0),
  reorderPoint: z.number().int().min(0).default(0),
  moq: z.number().int().positive().optional(),
  leadTime: z.string().optional(),
  status: z.enum(["active", "inactive", "low_stock"]).default("active"),
  supplierId: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  depth: z.string().optional(),
  techSpecs: z.string().optional(),
  qualityStandards: z.string().optional(),
  imageUrl: z.string().optional(),
})

export const orderSchema = z.object({
  supplierId: z.string().min(1, "Supplier is required"),
  orderDate: z.string().optional(),
  deliveryDate: z.string().optional(),
  status: z.enum(["pending", "processing", "shipped", "delivered", "cancelled"]).default("pending"),
  paymentStatus: z.enum(["unpaid", "deposit_paid", "paid"]).default("unpaid"),
  paymentTerms: z.string().optional(),
  shippingMethod: z.string().optional(),
  shippingAddress: z.string().optional(),
  trackingNumber: z.string().optional(),
  notes: z.string().optional(),
  items: z.array(z.object({
    itemId: z.string(),
    quantity: z.number().int().positive(),
    unitPrice: z.number().min(0),
    total: z.number().min(0),
  })).min(1, "At least one item is required"),
})

export const rfqSchema = z.object({
  supplierId: z.string().min(1, "Supplier is required"),
  dueDate: z.string().optional(),
  shippingTerms: z.string().optional(),
  certifications: z.string().optional(),
  comments: z.string().optional(),
  items: z.array(z.object({
    itemId: z.string(),
    quantity: z.number().int().positive(),
  })).min(1, "At least one item is required"),
})

export const sampleSchema = z.object({
  itemId: z.string().min(1, "Item is required"),
  supplierId: z.string().min(1, "Supplier is required"),
  requestDate: z.string().optional(),
  requiredByDate: z.string().optional(),
  quantity: z.number().int().positive().default(1),
  variations: z.string().optional(),
  comments: z.string().optional(),
  shippingAddress: z.string().optional(),
  status: z.enum(["requested", "in_transit", "received", "approved", "rejected"]).default("requested"),
  imageUrl: z.string().optional(),
})

export type SupplierFormData = z.infer<typeof supplierSchema>
export type ItemFormData = z.infer<typeof itemSchema>
export type OrderFormData = z.infer<typeof orderSchema>
export type RFQFormData = z.infer<typeof rfqSchema>
export type SampleFormData = z.infer<typeof sampleSchema>
