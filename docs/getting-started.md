# Zervi Sourcing App - Getting Started

This guide will help you set up the Zervi Sourcing App development environment and understand the basic workflow.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later)
- npm (v8 or later) or yarn (v1.22 or later)
- Git

## Setup Instructions

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-organization/zervi-sourcing-app.git
cd zervi-sourcing-app
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project follows the Next.js App Router structure:

- `app/`: Contains all pages and layouts
- `components/`: Reusable components
- `lib/`: Utility functions
- `public/`: Static assets
- `docs/`: Project documentation

## Development Workflow

### 1. Creating a New Page

1. Create a new directory in the `app` directory
2. Add a `page.tsx` file in the directory
3. Implement the page component
4. Update navigation if necessary

Example:
\`\`\`tsx
// app/new-feature/page.tsx
export default function NewFeaturePage() {
  return (
    <div>
      <h1>New Feature</h1>
      {/* Page content */}
    </div>
  );
}
\`\`\`

### 2. Creating a New Component

1. Create a new file in the `components` directory
2. Implement the component with proper TypeScript typing
3. Export the component

Example:
\`\`\`tsx
// components/feature-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
\`\`\`

### 3. Using shadcn/ui Components

The project uses shadcn/ui components for consistent UI. To use these components:

1. Import the component from the `@/components/ui` directory
2. Use the component in your JSX

Example:
\`\`\`tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchForm() {
  return (
    <div className="flex gap-2">
      <Input placeholder="Search..." className="flex-1" />
      <Button>Search</Button>
    </div>
  );
}
\`\`\`

### 4. Styling Components

The project uses Tailwind CSS for styling:

1. Use Tailwind utility classes directly in your JSX
2. Use the `cn` utility for conditional classes

Example:
\`\`\`tsx
import { cn } from "@/lib/utils";

interface BadgeProps {
  status: "active" | "inactive" | "pending";
  label: string;
}

export function StatusBadge({ status, label }: BadgeProps) {
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-xs font-medium",
        status === "active" && "bg-green-100 text-green-800",
        status === "inactive" && "bg-red-100 text-red-800",
        status === "pending" && "bg-yellow-100 text-yellow-800"
      )}
    >
      {label}
    </span>
  );
}
\`\`\`

## UI Design Guidelines

Remember that the UI design is now frozen. When implementing new features:

1. Follow the existing design patterns
2. Use the established color scheme and typography
3. Maintain consistency with existing components
4. Focus on improving functionality rather than changing the visual design

## Getting Help

If you have questions or need assistance:

1. Check the project documentation in the `docs` directory
2. Review the code comments for implementation details
3. Contact the project maintainers for specific questions

## Contributing

When contributing to the project:

1. Create a feature branch for your changes
2. Follow the code style and standards
3. Write tests for your changes
4. Update documentation as needed
5. Submit a pull request with a clear description of your changes
