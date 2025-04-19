# Zervi Sourcing App - Development Guidelines

## Code Style and Standards

### General Guidelines

1. **TypeScript**
   - Use TypeScript for all new code
   - Define proper interfaces and types
   - Avoid using `any` type

2. **Naming Conventions**
   - Use PascalCase for component names
   - Use camelCase for variables, functions, and props
   - Use kebab-case for file names
   - Use UPPER_CASE for constants

3. **File Organization**
   - One component per file
   - Group related components in directories
   - Keep files focused and concise

### React Guidelines

1. **Components**
   - Use functional components with hooks
   - Keep components focused on a single responsibility
   - Extract reusable logic into custom hooks
   - Use proper prop typing

2. **State Management**
   - Use React Context for global state
   - Use local state for component-specific state
   - Consider performance implications of context consumers

3. **Side Effects**
   - Use `useEffect` for side effects
   - Clean up side effects when components unmount
   - Handle errors in async operations

### Next.js Guidelines

1. **App Router**
   - Follow the App Router directory structure
   - Use layout components for shared UI
   - Implement loading states for better UX

2. **Server Components**
   - Use server components for data fetching where appropriate
   - Keep client components focused on interactivity
   - Use "use client" directive only when necessary

3. **API Routes**
   - Organize API routes logically
   - Implement proper error handling
   - Validate input data

## UI Development

### Design System

1. **Colors**
   - Use the color variables defined in `globals.css`
   - Do not hardcode color values
   - Ensure sufficient contrast for accessibility

2. **Typography**
   - Use the defined typography scale
   - Maintain consistent text styles
   - Ensure readability on all screen sizes

3. **Spacing**
   - Use the Tailwind spacing scale
   - Maintain consistent spacing
   - Use responsive spacing values

### Components

1. **shadcn/ui**
   - Use shadcn/ui components when available
   - Customize through the provided APIs
   - Avoid direct modification of component source

2. **Custom Components**
   - Follow the same patterns as shadcn/ui
   - Document props and usage
   - Ensure accessibility and responsiveness

### Responsive Design

1. **Mobile-First**
   - Start with mobile layouts
   - Use responsive utilities to adapt to larger screens
   - Test on various device sizes

2. **Breakpoints**
   - Use Tailwind's breakpoint system
   - Be consistent with breakpoint usage
   - Consider content needs, not just screen size

## Performance

1. **Optimization**
   - Use React.memo for expensive components
   - Optimize re-renders with proper dependency arrays
   - Use dynamic imports for code splitting

2. **Assets**
   - Optimize images and other assets
   - Use appropriate image formats
   - Implement lazy loading for non-critical assets

3. **Monitoring**
   - Monitor performance metrics
   - Address performance issues proactively
   - Test performance on various devices

## Accessibility

1. **Standards**
   - Follow WCAG 2.1 AA standards
   - Use semantic HTML elements
   - Provide text alternatives for non-text content

2. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Maintain a logical tab order
   - Provide visible focus indicators

3. **Screen Readers**
   - Use appropriate ARIA attributes
   - Test with screen readers
   - Provide context for screen reader users

## Testing

1. **Component Testing**
   - Test component rendering
   - Test component interactions
   - Test edge cases

2. **Integration Testing**
   - Test component interactions
   - Test data flow
   - Test user workflows

3. **End-to-End Testing**
   - Test complete user journeys
   - Test across different browsers
   - Test on different devices

## Git Workflow

1. **Branches**
   - Use feature branches for new features
   - Use bugfix branches for bug fixes
   - Use release branches for releases

2. **Commits**
   - Write clear commit messages
   - Keep commits focused
   - Reference issues in commit messages

3. **Pull Requests**
   - Provide clear descriptions
   - Include screenshots for UI changes
   - Request reviews from appropriate team members

## Documentation

1. **Code Documentation**
   - Document complex logic
   - Document component props
   - Document custom hooks

2. **Project Documentation**
   - Keep documentation up to date
   - Document architecture decisions
   - Document known issues and workarounds

3. **Comments**
   - Use comments to explain why, not what
   - Keep comments up to date
   - Remove commented-out code
