# IdeaForge — Website Structure, Mobile App & UI/UX Design

---

## 8. WEBSITE SITEMAP

```
IdeaForge.com
│
├── / (Homepage)
│   ├── Hero: "The world's idea exchange"
│   ├── How it works (3 steps: Post → Validate → Fund)
│   ├── Featured ideas carousel
│   ├── Stats: Ideas posted, investment committed, countries
│   ├── Testimonials
│   └── CTA: Sign up as Founder / Investor
│
├── /explore (Browse Ideas)
│   ├── Filter sidebar (stage, category, country, score, funding model)
│   ├── Sort: Trending | Newest | Most Validated | Ending Soon
│   ├── Idea cards grid (title, tagline, category, VS score, funding %)
│   └── Pagination / infinite scroll
│
├── /ideas/:slug (Idea Detail Page)
│   ├── Hero (title, tagline, badges, funding bar)
│   ├── Tabs: Overview | Pitch Deck | Demo | Reviews | Q&A | Team | Milestones
│   ├── Founder card (sidebar)
│   ├── Investment action panel (sidebar)
│   └── Related ideas
│
├── /founders/:username (Founder Profile)
│   ├── Bio, skills, country, verification badges
│   ├── Ideas posted (active, funded, closed)
│   ├── Reviews received
│   └── Contact / Follow
│
├── /investors/:username (Investor Profile)
│   ├── Investor type, sectors of interest, portfolio
│   └── Public activity (ideas followed, reviews given)
│
├── /submit (Submit Idea — 6-step wizard)
│   ├── Step 1: Basics
│   ├── Step 2: Problem
│   ├── Step 3: Solution
│   ├── Step 4: Market
│   ├── Step 5: Upload Assets
│   └── Step 6: Funding Setup
│
├── /dashboard (Authenticated)
│   ├── /dashboard/founder
│   │   ├── My ideas (draft | live | funded | closed)
│   │   ├── Reviews received
│   │   ├── Investor interest tracker
│   │   ├── Milestone manager
│   │   └── Earnings / fund releases
│   │
│   ├── /dashboard/investor
│   │   ├── Portfolio overview
│   │   ├── Watchlist
│   │   ├── Investment history
│   │   ├── Deal flow feed
│   │   └── KYC status
│   │
│   └── /dashboard/tester
│       ├── Reviews given
│       ├── Validation points & badges
│       └── Recommended ideas to review
│
├── /community (Validation Hub)
│   ├── "Needs Validation" idea queue
│   ├── Leaderboard: Top validators this week
│   └── Testing challenges (admin-curated)
│
├── /mentors (Mentor Directory)
│   ├── Browse mentors by domain
│   ├── Book a session
│   └── Mentor application
│
├── /accelerators (Accelerator Hub)
│   ├── Partner accelerator profiles
│   └── Apply to programs
│
├── /demo-day (Virtual Events)
│   ├── Upcoming live pitch events
│   └── Past event recordings
│
├── /about
├── /how-it-works
├── /pricing
├── /blog
├── /help
├── /terms
├── /privacy
├── /legal/investment-disclosure
│
└── /admin (Protected — staff only)
    ├── Idea review queue
    ├── KYC review queue
    ├── User management
    ├── Fraud flags
    ├── Platform analytics
    └── Fee & payout management
```

---

## 9. MOBILE APP STRUCTURE

### App Architecture (React Native — iOS & Android)

#### Tab Bar (Bottom Navigation)
```
[🏠 Home] [🔍 Explore] [➕ Submit] [💼 Portfolio] [👤 Profile]
```

---

### Founder App Flow

```
Onboarding
  → Role selection (Founder / Investor / Tester)
  → Profile setup wizard
  → Home Feed (trending ideas for inspiration)

Home Tab
  → My Active Ideas (quick status cards)
  → Notification badge
  → "New review received" cards

Submit Tab (+ button)
  → Idea submission wizard (same 6 steps, mobile-optimized)
  → Draft autosave
  → Asset upload (camera/gallery for photos, file picker for PDF)

My Idea Management
  → Idea card → Tap → Full detail
    ├── Reviews tab
    ├── Messages from investors
    ├── Milestone update form
    └── Analytics (views, saves, review count)

Profile Tab
  → Edit profile
  → Verification status
  → Settings
```

---

### Investor App Flow

```
Home Tab
  → Deal flow feed (personalized idea cards)
  → "New ideas matching your profile" section
  → Portfolio highlights

Explore Tab
  → Filter sheet (bottom drawer): sector, stage, ticket size
  → Idea list → Tap → Full idea detail screen
    ├── Swipe carousel: pitch deck pages
    ├── Video pitch player
    ├── Review summary
    ├── Founder profile card
    └── "Invest Now" / "Add to Watchlist" CTA

Portfolio Tab
  → Active investments
  → Milestone progress rings
  → Fund release history
  → Messages with founders

Notifications
  → New review on watchlisted idea
  → Founder milestone update
  → New matching idea
  → Investment confirmation
```

---

### Key Mobile Screens (Description)

| Screen | Key Elements |
|---|---|
| Splash / Onboarding | Brand animation, role picker, value prop slides |
| Home Feed | Card stack, trending tag chips, search bar |
| Idea Card | Title, category color chip, VS score badge, funding % bar, founder avatar |
| Idea Detail | Tabbed bottom sheet — scrollable rich content |
| Pitch Deck Viewer | Full-screen swipeable page viewer |
| Video Pitch | Inline player with subtitles support |
| Submit Wizard | Step progress bar, large tap targets, form fields |
| Investor Dashboard | Portfolio donut chart, investment list, milestone timeline |
| Chat / Messaging | WhatsApp-style thread UI |

---

## 10. UI/UX DESIGN DIRECTION

### Brand Identity

**Name**: IdeaForge  
**Tagline**: *Where ideas become companies.*  
**Brand Personality**: Bold, Global, Trustworthy, Inclusive, Future-forward

---

### Visual Style

**Direction**: Dark-mode first, with high-contrast light mode option.  
Aesthetic references: Linear.app + AngelList + Stripe Dashboard — *professional but energetic.*

**Core design language**:
- Clean, modular card-based layouts
- Generous white space (dark = dark space)
- Subtle glassmorphism on dashboard panels
- Gradient accents — never flat
- Data visualizations that feel premium (not stock-chart generic)

---

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--brand-primary` | `#6C47FF` (Electric Violet) | CTAs, links, active states |
| `--brand-secondary` | `#00D4A8` (Mint Green) | Success, validation score |
| `--brand-accent` | `#FF6B35` (Ember Orange) | Funding progress, urgency |
| `--bg-dark` | `#0D0D12` | Main background (dark mode) |
| `--surface-dark` | `#16161F` | Cards, panels |
| `--surface-light` | `#F5F5FA` | Light mode background |
| `--text-primary` | `#FFFFFF / #0D0D12` | Headings |
| `--text-muted` | `#8B8BA7` | Labels, secondary text |
| `--danger` | `#FF4560` | Errors, warnings |
| `--gold` | `#FFD166` | Premium badges, featured |

---

### Typography

| Use | Font | Weight |
|---|---|---|
| Display / Hero | **Clash Display** (Google alt: Plus Jakarta Sans) | 700, 800 |
| Headings | **Inter** | 600, 700 |
| Body | **Inter** | 400, 500 |
| Code / Data | **JetBrains Mono** | 400 |
| Accent labels | **Inter** | 500, uppercase, letter-spacing |

---

### Trust-Building Interface Ideas

1. **Validation Score Ring** — Circular progress ring (like Apple Watch rings) showing VS score 0–100 with color shift from red → amber → green
2. **Verification Badge Stack** — Small layered badge icons showing verification level (L1–L6) on hover showing what's verified
3. **Funding Momentum Bar** — Animated progress bar with "X investors backed this in last 24h" micro-copy
4. **Founder Response Rate** — "Responds within 4 hours" label (like Airbnb hosts)
5. **Review Credibility Scores** — Each review shows reviewer's Validator Level and history
6. **"Live" activity pill** — "👁 47 investors viewing this now"
7. **Escrow Lock icon** — Visual confirmation that funds are escrowed, not with founder yet
8. **Milestone timeline** — Gantt-style milestone progress visible to all investors

---

### Premium Investor Dashboard Feel

- **Portfolio overview card** with total committed, current estimated value, # of active investments
- **Opportunity Score** for each idea in watchlist (personalized match %)
- **Deal comparison table** — side-by-side idea comparison
- **Sector allocation donut chart**
- **Milestone health grid** — traffic light status for each portfolio company
- **"New since your last login"** section — urgency without spam

---

### Startup Discovery Browsing Experience

- **Tinder-style "Quick Browse" mode** (mobile): swipe right to save, left to dismiss
- **Board view option**: Kanban-like columns for stage (Idea | MVP | Traction | Revenue)
- **Trending tags**: Clickable topic chips (AI, HealthTech, Africa, Pre-seed)
- **Animated funding bar**: Real-time-feel animation when an idea gets a new commitment
- **"New today" badge**: Fresh badge for ideas posted < 24h ago
- **"Ending in X days"**: Countdown for funding round deadline
