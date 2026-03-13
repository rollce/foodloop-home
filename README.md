# FoodLoop Home

FoodLoop Home is a multi-page household food management app focused on reducing waste through pantry visibility, urgency-based planning, and smarter shopping decisions.

Live: https://food.rollsev.work

## Why this project exists

Many households waste food because they do not track expiry timing, buy duplicates, and plan meals without inventory awareness. FoodLoop models a practical home workflow to reduce this loss.

## Product goals

- Track pantry inventory with expiry windows
- Prioritize "use first" items before they spoil
- Generate meal ideas from urgent ingredients
- Improve shopping decisions and reduce duplicate buying

## Pages and user flows

- `/` Overview
  - Product summary, KPI cards, and route entry points
- `/pantry`
  - Add pantry items and review current inventory
- `/planner`
  - Surface urgent items (`expiresInDays <= 3`) and generate meal ideas
- `/shopping`
  - Show shopping optimizer recommendations to reduce waste and overspending

## API surface

### `GET /api/pantry`
Returns current pantry items.

### `POST /api/pantry`
Creates pantry item.

Required fields:
- `name`
- `quantity`
- `expiresInDays`
- `category`

Response:
- `{ item }` with generated id

## Planning logic (implemented)

From `src/app/planner/page.tsx`:
- Urgent list: items expiring within 3 days
- Rule-based meal ideas generated from ingredient presence (e.g., spinach + chicken)
- Fallback idea always included for flexible use-first meal planning

## Data model (demo)

Pantry item fields:
- `id`, `name`, `quantity`, `expiresInDays`, `category`

Categories:
- `Produce`, `Dairy`, `Protein`, `Dry goods`, `Other`

Note: storage is in-memory (`src/lib/store.ts`) for demo mode.

## UI / UX stack

- React-Bootstrap (`Navbar`, `Card`, `Table`, `Form`, `Alert`, grid system)
- Tailwind CSS utility layer
- Next.js App Router pages

## Technical stack

- Next.js 16 (App Router + Route Handlers)
- TypeScript
- Tailwind CSS 4
- React-Bootstrap

## Run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Quality checks

```bash
npm run lint
npm run build
```

## Deployment

- Deployed on Railway
- Public domain: `food.rollsev.work`

## Portfolio value

FoodLoop demonstrates practical domain UX and backend interaction patterns for household operations and sustainability-oriented product design.

## Roadmap

- Add household user profiles and shared pantry mode
- Add barcode scan input and product database mapping
- Add weekly waste analytics and cost savings dashboard
