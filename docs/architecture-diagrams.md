# Zervi Sourcing App - Architecture Diagrams

This document contains visual representations of the Zervi Sourcing App's architecture, component relationships, data flow, user flows, and state management approach.

## Viewing the Diagrams

The diagrams are available as an interactive HTML page that can be viewed in any modern browser, including tablets. To view the diagrams:

1. Navigate to `/diagrams` in the application
2. Use the tabs to switch between different diagram types
3. On smaller screens, you can scroll to see the full diagram

## Diagram Types

### 1. Application Architecture

This diagram shows the high-level layers of our application:
- Client Browser
- Next.js Frontend (UI Components, Page Components, State Management, API Services)
- Future Backend Services
- Database

### 2. Component Relationships

This diagram visualizes how our key components relate to each other:
- MainLayout
- Sidebar (SidebarHeader, SidebarContent, SidebarFooter)
- SidebarMenu and SidebarMenuItem
- Page Content and Page-specific Components (Cards, Tables, Forms)

### 3. Data Flow

This diagram shows how data flows through our application:
- User Input → UI Components → State Management → API Services → Backend API → Database
- Database → Backend API → API Services → State Management → UI Components → UI Updates

### 4. User Flow

This diagram illustrates the typical user journeys through our application:
- Supplier Listing → Search/Filter
- Supplier Listing → View Supplier Details → Contact Supplier/Request Quote/Add to Comparison
- Add to Comparison → Compare Suppliers
- Supplier Listing → Add New Supplier

### 5. State Management

This diagram visualizes our state management approach:
- Global State (SidebarContext, ThemeContext, AuthContext, Future Contexts)
- Component Local State (useState Hooks, useReducer Hooks)
- Data Fetching (Server Components, Client-side Fetching)

## Using These Diagrams

These diagrams serve several important purposes:

1. **Early Issue Detection**: Use these diagrams to identify missing connections, circular dependencies, or architectural flaws before they become problems in code.

2. **Communication Tool**: Use these diagrams when discussing the system with team members to ensure everyone has a common understanding.

3. **Onboarding Aid**: Share these diagrams with new team members to help them quickly understand the system's structure and relationships.

4. **Planning Tool**: When planning new features, refer to these diagrams to understand how they'll integrate with the existing system.

## Updating the Diagrams

As the application evolves, these diagrams should be updated to reflect changes in architecture, component relationships, data flow, user flows, and state management. The diagrams are implemented as React components in the `/diagrams` directory.
