# HANDOVER.md — Zervi Sourcing App

> **Read this first.** This document is for the next DeepSeek TUI agent taking over development.
> Last updated: 2026-05-14

---

## Quick Start (3 commands)

```bash
pnpm install        # installs deps + runs prisma generate (postinstall)
pnpm dev            # starts at http://localhost:3000
npx prisma db push  # sync schema → dev.db (already done, but safe to re-run)
```

---

## What This App Is

A full-stack procurement platform for garment/textile businesses. Supplier management, order tracking, sample evaluation, RFQ workflows, analytics.

## What's Done (Phases 1-4 Complete)

### Phase 1 — Foundation
- Build safety fixed (no more `ignoreBuildErrors`)
- Dependencies cleaned (27→11 Radix packages, all pinned)
- TypeScript 5.7.3, Next.js 16.2.6, React 19.2.6
- Branding unified to "Zervi Sourcing App" / "Zervi"
- StatusBadge fixed (variants remapped to valid Badge types)
- Dead files removed (`styles/globals.css`)

### Phase 2 — Pages
- 4 new pages: `/orders/[id]`, `/rfq/[id]`, `/items/[id]/edit`, `/team`
- Shared `DataListPage<T>` component at `components/data-list.tsx`
- 23 routes total

### Phase 3 — Data Layer
- **Database**: Prisma 7 + SQLite (`prisma/schema.prisma` — 8 models)
- **API Routes**: Full CRUD for 5 resources:
  - `app/api/suppliers/`, `app/api/items/`, `app/api/orders/`, `app/api/rfq/`, `app/api/samples/`
- **Validation**: Zod schemas at `lib/validations.ts` (supplier, item, order, rfq, sample)
- **Forms**: All 5 create forms wired with react-hook-form + zod + API submit
  - `app/supplier/add`, `app/items/add`, `app/orders/create`, `app/rfq`, `app/samples/request`
- **Analytics**: Real recharts (bar, donut, pie, line) at `app/analytics`
- **Settings**: Fixed raw `<input>` → shadcn `<Input>`

### Phase 4 — Auth + Business Logic
- **Auth**: NextAuth.js v5 (`lib/auth.ts`) — credentials provider, JWT sessions
  - Login at `/login` — test user: `admin@zervi.com` / `password`
  - Middleware: `proxy.ts` (renamed from `middleware.ts` for Next.js 16 Turbopack)
- **RFQ→Order**: `POST /api/rfq/convert` — converts completed RFQ to Order
- **Sample evaluation**: `POST /api/samples/evaluate` — approve/reject samples
- **Seed**: `POST /api/seed` — creates admin user + 3 suppliers + 3 items
- **Images**: All `<img>` → `<Image>`, optimization enabled with remote patterns
- **Error handling**: `app/error.tsx` (error boundary), `app/loading.tsx` (loading UI)

---

## Key Files (Read These First)

| File | Purpose |
|---|---|
| `prisma/schema.prisma` | Database schema — 8 models |
| `lib/prisma.ts` | PrismaClient singleton |
| `lib/auth.ts` | NextAuth.js v5 config |
| `lib/validations.ts` | Zod schemas for all forms |
| `proxy.ts` | Auth middleware (route protection) |
| `components/main-layout.tsx` | Sidebar + layout shell |
| `components/status-badge.tsx` | Shared status badge (import this, don't duplicate) |
| `components/data-list.tsx` | Generic `DataListPage<T>` for list pages |
| `docs/full-audit-report.md` | Full codebase audit |
| `.env` | DATABASE_URL + AUTH_SECRET |

---

## What's NOT Done (To-Do for Next Agent)

1. **Seed the database**: Hit `POST /api/seed` after deploying to populate test data
2. **Business logic refinement**: RFQ→Quote→Order and Sample→Approval workflows have API endpoints but pages still show hardcoded mock data — pages need to be updated to fetch from API
3. **List pages still use mock data**: Items, Orders, Samples, Suppliers list pages need to call their respective API endpoints instead of hardcoded arrays
4. **Inventory reorder alerts**: Low-stock highlighting on items page
5. **Dark mode testing**: Theme infrastructure is set up but needs visual QA
6. **Vercel deployment**: Production branch should be `main` (not the security branch)
7. **TypeScript strict mode**: Currently passes `tsc --noEmit` — maintain that

---

## Gotchas / Lessons Learned

1. **Prisma 7 requires `postinstall: prisma generate`** in package.json — Vercel needs this to generate the client during build
2. **Next.js 16 Turbopack**: `middleware.ts` is deprecated → use `proxy.ts` with `export default function proxy()`
3. **Prisma 7 TypeScript**: The `new PrismaClient()` call has a `@ts-expect-error` in `lib/prisma.ts` — at runtime, Prisma 7 reads the datasource URL from `prisma.config.ts`
4. **StatusBadge variants**: Only use `"default"`, `"secondary"`, `"destructive"`, `"outline"` — no `"success"` or `"warning"`
5. **Vercel deployment**: The project had a Vercel-created security branch `vercel/react-server-components-cve-vu-genku9` — we pushed our code to it as a workaround. Ideally switch production branch to `main`.
6. **All type errors are fixed**: `tsc --noEmit` passes clean — keep it that way
7. **Badge component** (`components/ui/badge.tsx`): Only has 4 variants — don't add custom ones without updating the Badge component

---

## Architecture Decisions

- **SQLite** over PostgreSQL — chosen for zero-config dev setup, single file
- **Prisma** over Drizzle — better type generation, schema-first approach
- **Credentials auth** over OAuth — simpler for internal B2B tool, dev password "password"
- **Zod + react-hook-form** — industry standard for form validation in Next.js
- **shadcn/ui** — chosen by original v0.dev scaffold, kept for consistency
- **No ORM abstractions** — API routes call Prisma directly, keeping it simple

---

## Git Log (Recent)

```
5fc1d86 fix-missing-orderNumber-in-both-order-create-routes
62104d6 fix-proxy-export-default-function-for-nextjs-16
f56419a fix-build-prisma-generate-postinstall-middleware-to-proxy
debe0a0 phase-4-business-logic-rfq-convert-sample-evaluate-seed
7e39861 phase-4-image-optimization-next-image-enabled
b39d5c7 phase-4-auth-error-boundaries-loading-ui
3e65630 phase-3-charts-settings-fix-real-recharts-and-shadcn-inputs
15252e9 phase-3-form-wiring-zod-react-hook-form-all-create-forms
2e3e4c6 phase-3-api-routes-5-resources-full-crud
2f210d0 phase-3-start-prisma-sqlite-database-schema-8-models
da72e20 fix-all-10-remaining-type-errors-clean-build
```
