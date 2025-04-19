# Zervi Sourcing App - UI Components

The Zervi Sourcing App uses a combination of shadcn/ui components and custom components to create a consistent and user-friendly interface.

## Core UI Components

### Navigation Components

1. **Sidebar**
   - Main navigation component
   - Collapsible for space efficiency
   - Mobile-responsive with slide-out behavior
   - Sections for main navigation and quick access
   - User profile section

2. **Header**
   - Page title and context
   - Action buttons relevant to the current page
   - Mobile menu toggle

### Data Display Components

1. **Cards**
   - Used for displaying supplier information, orders, samples, etc.
   - Consistent styling with header, content, and footer sections
   - Support for various content types

2. **Tables**
   - Used for structured data display
   - Sortable and filterable
   - Responsive design for mobile viewing

3. **Tabs**
   - Used for organizing related content
   - Consistent styling across the application
   - Support for dynamic content loading

### Form Components

1. **Inputs**
   - Text inputs, selects, checkboxes, etc.
   - Consistent styling and behavior
   - Validation support

2. **Buttons**
   - Primary, secondary, and tertiary styles
   - Icon support
   - Loading states

3. **Selects and Dropdowns**
   - Single and multi-select options
   - Search functionality
   - Custom styling

### Feedback Components

1. **Badges**
   - Status indicators
   - Color-coded for different states
   - Compact design

2. **Progress Indicators**
   - Used for showing order progress, etc.
   - Linear progress bars
   - Step indicators

3. **Alerts and Notifications**
   - Success, error, warning, and info states
   - Dismissible options
   - Timed auto-dismiss

## Custom Components

1. **SupplierCard**
   - Displays supplier information in a card format
   - Rating display
   - Contact information
   - Action buttons

2. **OrderStatusBadge**
   - Visual indicator for order status
   - Color-coded for different states
   - Icon support

3. **StatusBadge**
   - Generic status badge for various entities
   - Configurable appearance based on status

## Component Guidelines

1. **Consistency**
   - Use the established component library
   - Maintain consistent spacing, typography, and color usage
   - Follow established patterns for similar functionality

2. **Accessibility**
   - Ensure all components are keyboard navigable
   - Use appropriate ARIA attributes
   - Maintain sufficient color contrast
   - Provide text alternatives for non-text content

3. **Responsiveness**
   - All components should adapt to different screen sizes
   - Use responsive units (rem, %, etc.) instead of fixed pixels
   - Test on various devices and screen sizes

4. **Performance**
   - Minimize unnecessary re-renders
   - Use code splitting for large components
   - Optimize images and assets

## Theme Customization

The application uses a theme system with CSS variables for consistent styling:

- Base colors defined in `globals.css`
- Dark mode support via theme switching
- Component-specific theming variables

## Adding New Components

When adding new components:

1. Check if an existing shadcn/ui component can be used or extended
2. Follow the established naming conventions
3. Document the component's props and usage
4. Ensure the component is responsive and accessible
5. Add the component to this documentation
