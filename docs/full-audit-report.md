# Full Audit Report — Zervi Sourcing App / ProcureFlow

**Date:** 2026-05-12
**Audited by:** Automated codebase audit
**Status:** Early development — UI prototype / scaffold phase

---

## 0. Development Stage Context

This application is **not yet a functioning product**. It is in the early scaffold / UI prototype stage:

- Some navigation menu items have **no corresponding pages built** (e.g., Team management)
- Some forms are **visually built but have no CRUD logic** — buttons are non-functional
- Several detail/routing links point to **routes that don't exist yet**
- **Business logic has not been reviewed** — data flow, validation rules, procurement workflows are not implemented
- All data is **hardcoded mock data** with no API, database, or state management

The audit below should be read with this context. Items marked as "missing" may simply be not-yet-built rather than bugs.

---

## 1. Executive Summary

This is a **v0.dev AI-generated Next.js scaffold** for a garment accessories procurement platform. The UI is well-structured visually with clean shadcn/ui integration and proper Next.js App Router conventions. However, it is purely a UI shell — no backend, no API layer, no form handling, no database.

**Overall grade: C+** — acceptable as a design prototype / stakeholder demo. Significant work needed to reach production readiness.

---

## 2. Feature Completion Matrix

| Feature Area | Pages Built | Forms Exist | CRUD Working | Business Logic | Notes |
|---|---|---|---|---|---|
| **Dashboard** | ✅ | N/A | N/A | ❌ | Static mock stats |
| **Supplier List** | ✅ | N/A | N/A | ❌ | `/` and `/supplier` — two separate pages for same concept |
| **Supplier Detail** | ✅ | Partial | ❌ | ❌ | Tabs are placeholders ("would appear here") |
| **Add Supplier** | ✅ | ✅ (visual) | ❌ | ❌ | Form has no submit handler |
| **Items List** | ✅ | N/A | N/A | ❌ | Mock data, filter tabs work visually |
| **Item Detail** | ✅ | Partial | ❌ | ❌ | Stock bar works, tabs are placeholders |
| **Add Item** | ✅ | ✅ (visual) | ❌ | ❌ | Upload zones are non-functional |
| **Orders List** | ✅ | N/A | N/A | ❌ | Links to `/orders/[id]` (404) |
| **Create Order** | ✅ | ✅ (visual) | ❌ | ❌ | Item selection, no totals calculation |
| **Samples List** | ✅ | N/A | N/A | ❌ | |
| **Sample Detail** | ✅ | ✅ (visual) | ❌ | ❌ | Has duplicate StatusBadge component |
| **Request Sample** | ✅ | ✅ (visual) | ❌ | ❌ | |
| **RFQ List** | ✅ | N/A | N/A | ❌ | Links to `/rfq/[id]` (404) |
| **Create RFQ** | ✅ | ✅ (visual) | ❌ | ❌ | Supplier selection, certifications |
| **Documents** | ✅ | Partial | ❌ | ❌ | Upload/New Folder buttons non-functional |
| **Analytics** | ✅ | N/A | N/A | ❌ | All 4 chart panels show placeholder text |
| **Compare Suppliers** | ✅ | N/A | N/A | ❌ | Clean comparison table, hardcoded suppliers |
| **Settings** | ✅ | Partial | ❌ | ❌ | Toggle switches visual-only, password form raw HTML inputs |
| **Team Management** | ❌ | ❌ | ❌ | ❌ | Link in sidebar, no page exists |
| **Item Edit** | ❌ | ❌ | ❌ | ❌ | Linked from item detail, no page exists |

---

## 3. Strengths

- **Clean App Router structure** — routes follow Next.js conventions with `loading.tsx` skeletons, nested layouts
- **shadcn/ui integration** — consistent component library usage, full dark/light theme via CSS variables
- **Sidebar implementation** — well-engineered with cookie persistence, keyboard shortcuts (`Ctrl+B`), mobile responsive sheet overlay, collapsible states
- **Theming** — proper HSL-based CSS custom properties, full light + dark mode coverage, sidebar theming variables
- **StatusBadge abstraction** — good intent to centralize status-to-style mapping (though flawed in execution, see below)
- **Documentation** — 10 markdown files in `docs/` covering architecture, API endpoints, DB schema, roadmap — unusually thorough for a scaffold
- **`.gitignore`** — correctly covers Next.js, node_modules, env files, TypeScript artifacts
- **Compare page** — clean side-by-side comparison table, one of the better-implemented pages
- **PageSummary component** — consistent page-level header abstraction used across create/edit pages

---

## 4. Critical Issues (Must Fix Before Production)

### 4.1. Build Safety Disabled
In `next.config.mjs`:
```js
eslint: { ignoreDuringBuilds: true },
typescript: { ignoreBuildErrors: true },
images: { unoptimized: true },
```
These three lines mask real problems. TypeScript errors and lint violations are silently swallowed. Image optimization is disabled, forcing unoptimized images in production. **Revert all three.**

### 4.2. Non-Deterministic Builds
Twenty-one dependencies use `"latest"` as version:
```
@radix-ui/react-accordion, @radix-ui/react-alert-dialog, ... (19 Radix packages)
cmdk, embla-carousel-react, input-otp, next-themes, react-day-picker, 
react-hook-form, react-resizable-panels, recharts, sonner, vaul
```
Every `pnpm install` can produce a different `pnpm-lock.yaml`. Pin to exact versions.

### 4.3. StatusBadge Variant Mismatch
`components/status-badge.tsx` maps to variants `"success"` and `"warning"`, but the `Badge` component (standard shadcn) only defines `"default"`, `"secondary"`, `"destructive"`, `"outline"`. These will render as `undefined` CSS classes — the badges will have no styling for those states.

Additionally, `app/samples/[id]/page.tsx` defines a **local duplicate** `StatusBadge` function instead of importing the shared component.

### 4.4. Dead Routes (404s)
Multiple pages link to routes that don't exist:
- `/orders/${order.id}` — no `app/orders/[id]/` directory
- `/rfq/${rfq.id}` — no `app/rfq/[id]/` directory
- `/items/${id}/edit` — no `app/items/[id]/edit/` directory
- `/team` — no `app/team/` directory

These will 404. Either create the pages or remove the links.

### 4.5. Duplicate CSS File
Both `app/globals.css` and `styles/globals.css` exist. Only `app/globals.css` is imported. `styles/globals.css` is dead code — remove it.

### 4.6. UI Claims vs. Data Mismatch
`app/page.tsx` (the landing/supplier page): the tab header says "All Suppliers (20)" but only 6 supplier objects exist in the array. The page default export is named `SuppliersPage` but lives at `/`, causing confusion with `app/supplier/page.tsx` (which is a separate `SupplierListPage`).

---

## 5. High-Severity Code Quality Issues

### 5.1. Massive Code Duplication
Every list page (items, orders, samples, rfq/list, supplier) repeats the same card-rendering pattern 4-5 times — one per tab filter. Each tab is a full copy-paste with only a `.filter()` call different. ~60-70% of the page code is duplicated. Extract a `<FilteredList>` or `<ListItemCard>` component.

**Affected files:**
- `app/items/page.tsx` — 4x repeated card rendering
- `app/orders/page.tsx` — 4x repeated, plus dead route links
- `app/samples/page.tsx` — 4x repeated
- `app/rfq/list/page.tsx` — 4x repeated
- `app/supplier/page.tsx` — 4x repeated

### 5.2. No Form Logic
Every create/edit form (add item, add supplier, create order, RFQ, sample request) is purely visual:
- No `useState` for form fields
- No `onSubmit` handlers
- No `react-hook-form` integration despite the package being installed
- `zod` and `@hookform/resolvers` are installed but unused
- Buttons ("Save Item", "Submit RFQ", "Create Order") do nothing

### 5.3. `img` Instead of `next/image`
Every image uses native `<img>` tags. Next.js `<Image>` provides lazy loading, aspect ratio preservation, and CLS prevention. The `public/` directory contains product images that should use the optimized pipeline.

### 5.4. Settings Page Uses Raw `<input>`
The settings page uses raw `<input className="w-full mt-1 px-3 py-2 border...">` for password fields instead of the shadcn `<Input>` component — breaks the design system consistency.

### 5.5. No Error Boundaries
Zero error boundaries in the app. Any single component crash takes down the entire page.

### 5.6. Orphan Page
`diagrams/page.tsx` exists but has no navigation link from the sidebar or any other page. It's inaccessible in normal navigation flow.

---

## 6. Dependency Audit

### 6.1. Dead Dependencies (Installed but Unused)

| Package | Purpose | Status |
|---|---|---|
| `recharts` | Charts library | Installed but analytics page only shows placeholder text |
| `embla-carousel-react` | Carousel | No usage found |
| `input-otp` | OTP input | No usage found |
| `vaul` | Drawer (mobile) | Sheet component used instead |
| `react-day-picker` | Date picker | `<input type="date">` used instead |
| `sonner` | Toast notifications | No usage found |
| `date-fns` | Date formatting | No usage found |
| `zod` | Schema validation | Installed, no schemas defined |
| `@hookform/resolvers` | Form resolver bridge | No form logic implemented |
| `react-resizable-panels` | Resizable panels | No usage found |

**Verdict:** ~10 packages (~25% of dependencies) are dead weight. Either implement the features they support or remove them.

### 6.2. Over-Fetched Radix Packages
27 `@radix-ui/*` packages are installed. Only ~12 are actually used (avatar, checkbox, dialog, label, select, separator, slot, switch, tabs, tooltip, sheet, scroll-area). The other 15 have no usage and bloat `node_modules`.

---

## 7. Architecture Issues

### 7.1. No Data Layer
All state is hardcoded JS arrays inside component files. Missing:
- Data fetching (fetch, SWR, React Query)
- API routes (`app/api/`)
- Database schema (docs describe one but it doesn't exist in code)
- State management (Context, Zustand, Redux)
- Caching strategy

### 7.2. Branding Fragmentation
Four different names exist across the codebase:
| Location | Name |
|---|---|
| Browser tab title / metadata | "Zervi Sourcing App" |
| Sidebar logo text | "ProcureFlow" |
| `package.json` name | "my-v0-project" |
| README | "v0-simplifying-purchasing-tool-fy" |
| HTML generator meta | "v0.dev" |

Pick one name and use it consistently. The docs call it "Zervi Sourcing App" — align everything to that.

### 7.3. Missing Authentication
No auth layer exists. The sidebar shows "John Doe" / "john.doe@example.com" as hardcoded values. The architecture doc acknowledges auth is "to be implemented."

### 7.4. Chart Placeholders
The analytics page has 4 chart cards plus 3 tab panels, all showing "would appear here" placeholder text. `recharts` is already installed — implement the charts or remove the analytics section until ready.

---

## 8. Business Logic Gaps (To Review)

The following procurement-specific workflows are either absent or incomplete and need business review:

1. **RFQ → Quote → Order flow**: RFQs can be created and suppliers selected, but there's no quote response capture, no quote comparison leading to order creation, and no status transition logic
2. **Sample → Approval → Production flow**: Sample evaluation form exists visually but has no state transition, no approval workflow, no link to item activation
3. **Inventory management**: Reorder points are displayed but no automatic reorder triggers, no stock adjustment logic
4. **Supplier verification**: `verified: true/false` flag exists but no verification workflow
5. **Payment tracking**: Payment statuses exist ("Paid", "Deposit Paid", "Not Paid") but no payment recording, no invoice matching
6. **Shipping/Incoterms**: Selected in forms but no shipping cost calculation, no delivery tracking integration
7. **Multi-currency / multi-supplier pricing**: All prices are in USD, no currency conversion
8. **Certification tracking**: Certifications are displayed but no expiry tracking, no re-verification workflow

---

## 9. TypeScript Quality

- `tsconfig.json` target is `ES6` — should be `ES2017` or higher for modern Node/Next.js
- `allowJs: true` but no `.js` files in the project
- `strict: true` is correctly set — good
- Several `any` type casts (`variant as any`) — tighten these
- `app/samples/[id]/page.tsx` destructures `{ params }` without type annotation

---

## 10. Security & Performance

| Concern | Severity | Detail |
|---|---|---|
| No input sanitization | **High** | Forms accept arbitrary input with no validation |
| No CSRF protection | Medium | Architecture doc mentions it but not implemented |
| No rate limiting | Low | No API routes exist yet |
| Unoptimized images | Medium | `images.unoptimized: true` in config |
| No lazy loading | Low | All page components loaded eagerly |
| `target="_blank"` usage | ✅ Correct | Uses `rel="noopener noreferrer"` |

---

## 11. Prioritized Action Plan

### Phase 1 — Fix Build & Safety (Critical, Low Effort)
1. Remove `ignoreDuringBuilds` flags from `next.config.mjs`
2. Pin all `"latest"` dependencies to exact versions
3. Fix `StatusBadge` variants (add `success`/`warning` to Badge, or map to existing variants)
4. Fix or remove dead routes (`/orders/[id]`, `/rfq/[id]`, `/team`, `/items/[id]/edit`)
5. Remove `styles/globals.css` (dead file)
6. Remove unused Radix UI packages to reduce install size

### Phase 2 — Code Quality (Medium Effort)
7. Extract shared list-card components to eliminate ~60% code duplication
8. Wire up `react-hook-form` + `zod` for all create/edit forms
9. Replace raw `<input>` in settings with shadcn `<Input>`
10. Switch from `<img>` to `<Image>` (and re-enable optimization)
11. Add error boundaries at route level
12. Remove unused dependencies or implement their features

### Phase 3 — Architecture & Features (High Effort)
13. Unify branding to a single name across all files
14. Implement API routes + database per architecture docs
15. Add authentication and authorization
16. Implement analytics charts with recharts
17. Add form validation schemas with zod
18. Build missing pages: Team, Order Detail, RFQ Detail, Item Edit

### Phase 4 — Business Logic (Requires Domain Review)
19. Design and implement RFQ → Quote → Order state machine
20. Design and implement Sample evaluation → Approval workflow
21. Implement inventory management with reorder triggers
22. Add supplier verification workflow
23. Implement payment tracking and invoice matching
24. Add certification expiry tracking

---

## 12. File-by-File Quick Reference

| File | Issues |
|---|---|
| `next.config.mjs` | 🛑 Build safety disabled |
| `package.json` | 🟡 21 latest deps, ~10 unused, generic name |
| `app/page.tsx` | 🟡 Named SuppliersPage at /, only 6 of 20 suppliers |
| `app/layout.tsx` | 🟢 Clean, good metadata pattern |
| `components/main-layout.tsx` | 🟢 Well-structured sidebar with correct active-state logic |
| `components/status-badge.tsx` | 🛑 Variant mismatch ("success", "warning" not in Badge) |
| `components/theme-provider.tsx` | 🟢 Clean passthrough wrapper |
| `components/page-summary.tsx` | 🟢 Good abstraction |
| `app/dashboard/page.tsx` | 🟢 Static but functional summary view |
| `app/items/page.tsx` | 🟡 4x repeated card rendering |
| `app/items/[id]/page.tsx` | 🟡 Tab placeholders, hardcoded item data |
| `app/items/add/page.tsx` | 🟡 Visual form only, no handlers |
| `app/orders/page.tsx` | 🟡 4x repeated, links to nonexistent /orders/[id] |
| `app/orders/create/page.tsx` | 🟡 Visual form only, no handlers |
| `app/samples/page.tsx` | 🟡 4x repeated card rendering |
| `app/samples/[id]/page.tsx` | 🛑 Local StatusBadge duplicate, no state transitions |
| `app/samples/request/page.tsx` | 🟡 Visual form only |
| `app/rfq/page.tsx` | 🟡 Form has no handlers |
| `app/rfq/list/page.tsx` | 🟡 4x repeated, links to nonexistent /rfq/[id] |
| `app/supplier/page.tsx` | 🟡 4x repeated, separate from landing page |
| `app/supplier/[id]/page.tsx` | 🟡 Tab placeholders |
| `app/supplier/add/page.tsx` | 🟡 Visual form only, no handlers |
| `app/documents/page.tsx` | 🟡 Upload/New Folder non-functional |
| `app/analytics/page.tsx` | 🟡 Placeholder charts only |
| `app/settings/page.tsx` | 🟡 Raw inputs instead of shadcn |
| `app/compare/page.tsx` | 🟢 Clean comparison table, one of the better pages |
| `components/ui/sidebar.tsx` | 🟢 Well-implemented, cookie + keyboard + mobile |
| `styles/globals.css` | 🛑 Dead file, not imported |
| `diagrams/page.tsx` | 🟡 No navigation link, orphan page |
| `docs/` | 🟢 Thorough documentation for scaffold stage |

---

*End of audit report.*
