# Zervi Sourcing App - API Endpoints

This document outlines the planned API endpoints for the Zervi Sourcing App. These endpoints will be implemented in the next phase of development to support the frontend UI that has already been created.

## Base URL

All API endpoints will be prefixed with `/api`.

## Authentication

Most endpoints require authentication using JWT (JSON Web Tokens). After logging in, include the access token in the Authorization header:

\`\`\`
Authorization: Bearer {access_token}
\`\`\`

## API Categories

### Suppliers API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/suppliers | Get a list of suppliers with optional filtering and pagination |
| GET | /api/suppliers/:id | Get detailed information about a specific supplier |
| POST | /api/suppliers | Create a new supplier |
| PUT | /api/suppliers/:id | Update an existing supplier |
| DELETE | /api/suppliers/:id | Delete a supplier |

#### Query Parameters for GET /api/suppliers

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `search`: Search term for supplier name or specialization
- `certification`: Filter by certification (e.g., "OEKO-TEX")

### Orders API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/orders | Get a list of orders with optional filtering and pagination |
| GET | /api/orders/:id | Get detailed information about a specific order |
| POST | /api/orders | Create a new order |
| PUT | /api/orders/:id | Update an existing order |
| DELETE | /api/orders/:id | Delete an order |

#### Query Parameters for GET /api/orders

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `status`: Filter by status (e.g., "production", "shipped")
- `supplier_id`: Filter by supplier ID

### Samples API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/samples | Get a list of samples with optional filtering and pagination |
| GET | /api/samples/:id | Get detailed information about a specific sample |
| POST | /api/samples | Create a new sample request |
| PUT | /api/samples/:id | Update an existing sample |
| PUT | /api/samples/:id/status | Update the status of a sample (e.g., approve, reject) |
| DELETE | /api/samples/:id | Delete a sample |

#### Query Parameters for GET /api/samples

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `status`: Filter by status (e.g., "received", "approved")
- `supplier_id`: Filter by supplier ID

### RFQ API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/rfqs | Get a list of RFQs with optional filtering and pagination |
| GET | /api/rfqs/:id | Get detailed information about a specific RFQ |
| POST | /api/rfqs | Create a new RFQ |
| PUT | /api/rfqs/:id | Update an existing RFQ |
| POST | /api/rfqs/:id/send | Send an RFQ to selected suppliers |
| DELETE | /api/rfqs/:id | Delete an RFQ |

#### Query Parameters for GET /api/rfqs

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `status`: Filter by status (e.g., "draft", "sent", "responded")

### Documents API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/documents | Get a list of documents with optional filtering and pagination |
| GET | /api/documents/:id | Get detailed information about a specific document |
| POST | /api/documents/upload | Upload a new document |
| PUT | /api/documents/:id | Update document metadata |
| DELETE | /api/documents/:id | Delete a document |

#### Query Parameters for GET /api/documents

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `type`: Filter by document type (e.g., "contract", "invoice")
- `supplier_id`: Filter by supplier ID
- `order_id`: Filter by order ID

### Authentication API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/login | Authenticate a user and get an access token |
| POST | /api/auth/register | Register a new user |
| GET | /api/auth/me | Get the current authenticated user's information |
| POST | /api/auth/logout | Logout the current user and invalidate the access token |

### Analytics API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/analytics/spend | Get spend analytics data |
| GET | /api/analytics/suppliers | Get supplier performance analytics |
| GET | /api/analytics/categories | Get category analysis data |
| GET | /api/analytics/trends | Get trend analysis data |

#### Query Parameters for Analytics Endpoints

- `period`: Time period (e.g., "last-30-days", "last-90-days", "year-to-date")
- `group_by`: Grouping (e.g., "supplier", "category", "month")

## Response Format

All API responses will follow a consistent format:

### Success Response

\`\`\`json
{
  "data": [...],  // Response data
  "pagination": {  // Included for list endpoints
    "total": 42,
    "page": 1,
    "limit": 20,
    "pages": 3
  }
}
\`\`\`

### Error Response

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [...]  // Optional detailed error information
  }
}
\`\`\`

## Implementation Plan

1. **Setup API Framework**: Configure the API framework and middleware
2. **Authentication**: Implement authentication and authorization
3. **Core Endpoints**: Implement the core CRUD endpoints for each entity
4. **Validation**: Add request validation
5. **Testing**: Create comprehensive API tests
6. **Documentation**: Generate API documentation

## API Versioning

The API will be versioned to ensure backward compatibility as the application evolves. The initial version will be v1, which will be implicit in the base URL.

Future versions will be explicitly included in the URL path:

\`\`\`
/api/v2/suppliers
\`\`\`

This API design provides a solid foundation for the backend implementation of the Zervi Sourcing App, supporting all the functionality demonstrated in the UI prototype.
