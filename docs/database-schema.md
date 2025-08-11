# Zervi Sourcing App - Database Schema

This document outlines the planned database schema for the Zervi Sourcing App. The schema is designed to support all the core functionality of the application while allowing for future expansion.

## Core Entities

### Items
A central entity representing the products being sourced.

**Key Fields:**
- id (UUID, Primary Key)
- internal_sku (VARCHAR, unique internal SKU/part number)
- customer_sku (VARCHAR, customer's SKU/part number)
- name (VARCHAR)
- category (VARCHAR)
- subcategory (VARCHAR)
- description (TEXT)
- specifications (JSONB, technical specifications)
- unit_of_measure (VARCHAR)
- min_order_quantity (INTEGER)
- target_price (DECIMAL)
- status (VARCHAR) - active, discontinued, in-development
- image_url (VARCHAR)

### Suppliers
Another central entity, representing garment accessories suppliers.

**Key Fields:**
- id (UUID, Primary Key)
- name (VARCHAR)
- specialization (VARCHAR)
- location (VARCHAR)
- contact information (phone, email, website)
- business details (min_order_quantity, lead_time, payment_terms)
- rating (DECIMAL)
- image_url (VARCHAR)

### Orders
Tracks orders placed with suppliers.

**Key Fields:**
- id (UUID, Primary Key)
- order_number (VARCHAR)
- supplier_id (Foreign Key)
- status (VARCHAR) - draft, confirmed, production, shipped, delivered, completed
- order_date (DATE)
- delivery_date (DATE)
- shipping_terms (VARCHAR)
- payment_terms (VARCHAR)
- currency (VARCHAR)
- total_value (DECIMAL)

### Samples
Manages sample requests and approvals.

**Key Fields:**
- id (UUID, Primary Key)
- sample_id (VARCHAR)
- supplier_id (Foreign Key)
- item_id (Foreign Key)
- quantity (INTEGER)
- details (TEXT)
- specifications (JSONB)
- status (VARCHAR) - requested, in-transit, received, approved, rejected
- request_date (DATE)
- received_date (DATE)

### RFQs (Request for Quotes)
Handles requests for quotes sent to suppliers.

**Key Fields:**
- id (UUID, Primary Key)
- rfq_number (VARCHAR)
- title (VARCHAR)
- description (TEXT)
- delivery_date (DATE)
- shipping_terms (VARCHAR)
- status (VARCHAR) - draft, sent, responded, closed

### Documents
Stores document metadata with references to related entities.

**Key Fields:**
- id (UUID, Primary Key)
- name (VARCHAR)
- type (VARCHAR) - contract, invoice, specification, certificate
- file_url (VARCHAR)
- supplier_id, order_id, sample_id, rfq_id, or item_id (Foreign Keys)

### Users
Manages user accounts and permissions.

**Key Fields:**
- id (UUID, Primary Key)
- name (VARCHAR)
- email (VARCHAR)
- password_hash (VARCHAR)
- role (VARCHAR) - admin, purchasing_manager, sourcing_specialist, etc.

## Junction Tables

### Item_Suppliers
Manages the many-to-many relationship between items and suppliers.

**Key Fields:**
- id (UUID, Primary Key)
- item_id (Foreign Key)
- supplier_id (Foreign Key)
- supplier_part_number (VARCHAR)
- unit_price (DECIMAL)
- lead_time (VARCHAR)
- moq (INTEGER)
- is_preferred (BOOLEAN)

### Order_Items
Tracks items within an order.

**Key Fields:**
- id (UUID, Primary Key)
- order_id (Foreign Key)
- item_id (Foreign Key)
- quantity (INTEGER)
- unit_price (DECIMAL)
- total_price (DECIMAL)
- specifications (JSONB)

### RFQ_Items
Tracks items within an RFQ.

**Key Fields:**
- id (UUID, Primary Key)
- rfq_id (Foreign Key)
- item_id (Foreign Key)
- quantity (INTEGER)
- target_price (DECIMAL)
- specifications (JSONB)

### RFQ_Suppliers
Manages the many-to-many relationship between RFQs and suppliers.

**Key Fields:**
- id (UUID, Primary Key)
- rfq_id (Foreign Key)
- supplier_id (Foreign Key)
- response_status (VARCHAR)
- response_date (DATE)

### RFQ_Supplier_Items
Tracks supplier quotes for specific items in an RFQ.

**Key Fields:**
- id (UUID, Primary Key)
- rfq_supplier_id (Foreign Key)
- rfq_item_id (Foreign Key)
- quoted_price (DECIMAL)
- quoted_lead_time (VARCHAR)
- moq (INTEGER)

### Supplier_Certifications
Manages the many-to-many relationship between suppliers and certifications.

**Key Fields:**
- id (UUID, Primary Key)
- supplier_id (Foreign Key)
- certification_id (Foreign Key)
- expiry_date (DATE)
- verification_status (VARCHAR)

## Supporting Entities

### Certifications
Stores information about different types of certifications.

**Key Fields:**
- id (UUID, Primary Key)
- name (VARCHAR)
- description (TEXT)

## Relationships

1. **Items to Suppliers**: Many-to-many through Item_Suppliers
2. **Items to Orders**: Many-to-many through Order_Items
3. **Items to Samples**: One-to-many
4. **Items to RFQs**: Many-to-many through RFQ_Items
5. **Suppliers to Certifications**: Many-to-many through Supplier_Certifications
6. **Suppliers to Orders**: One-to-many
7. **Suppliers to Samples**: One-to-many
8. **Suppliers to RFQs**: Many-to-many through RFQ_Suppliers
9. **Documents to various entities**: Many-to-one with Suppliers, Orders, Samples, RFQs, or Items

## Design Considerations

1. **UUID Primary Keys**: Using UUIDs instead of auto-incrementing integers for better distribution and security.
2. **Timestamps**: All tables include created_at and updated_at fields for auditing.
3. **Soft Deletes**: Will be implemented where appropriate to preserve historical data.
4. **Indexing**: Appropriate indexes will be added for performance optimization.
5. **Constraints**: Foreign key constraints ensure data integrity.
6. **JSONB for Specifications**: Using JSONB type for flexible specifications that may vary by product type.

## Implementation Plan

1. **Database Setup**: Configure the database environment and create the schema
2. **API Development**: Create RESTful API endpoints for each entity
3. **Data Migration**: Develop scripts to migrate mock data to the actual database
4. **Integration**: Connect the frontend components to the backend API
5. **Testing**: Thoroughly test all database operations and relationships

## Conclusion

This database schema provides a solid foundation for the Zervi Sourcing App's data management needs. It captures all the essential entities and relationships required for supplier management, order tracking, sample management, RFQ processing, and document management. The addition of the Items entity ensures proper tracking of products with both internal and customer SKUs, which is critical for the purchasing workflow where samples lead to bulk orders.
\`\`\`

\`\`\`html file="diagrams/architecture-diagram.html"
... This file was left out for brevity. Assume it is correct and does not need any modifications. ...
