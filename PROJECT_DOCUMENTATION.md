# Adiverse Project Documentation

## Project Overview

**Adiverse** is a premium literary platform designed for writers and readers of poems, short stories, and novels. The platform provides a distraction-free reading experience and a writer's studio that respects the page. It combines a beautiful user interface with powerful content management and discovery features.

**Tagline:** "Where every story finds a home"

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technology Stack](#technology-stack)
3. [Core Components](#core-components)
4. [Routes & Pages](#routes--pages)
5. [Features & Workflows](#features--workflows)
6. [Data Structure](#data-structure)
7. [User Profiles](#user-profiles)
8. [Component Breakdown](#component-breakdown)

---

## Project Structure

```
Adiverse/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ContentCard.tsx   # Card displaying a piece of content
│   │   ├── Logo.tsx          # Logo with image import
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── ReadingTimeFilter.tsx  # Filter by reading time
│   │   └── ui/               # Shadcn/ui component library
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── button.tsx
│   │       ├── dropdown-menu.tsx
│   │       └── ... (30+ UI components)
│   │
│   ├── hooks/                # Custom React hooks
│   │   └── use-mobile.tsx    # Detect mobile viewport
│   │
│   ├── lib/                  # Utilities and configuration
│   │   ├── mock-data.ts      # Mock content database
│   │   ├── theme.tsx         # Dark/light theme context
│   │   ├── utils.ts          # Utility functions (cn)
│   │   ├── config.server.ts  # Server configuration
│   │   └── error-*.ts        # Error handling modules
│   │
│   ├── routes/               # Application pages
│   │   ├── __root.tsx        # Root layout
│   │   ├── index.tsx         # Home/Feed page
│   │   ├── explore.tsx       # Explore page
│   │   ├── write.tsx         # Writing studio
│   │   ├── read.novel.$id.tsx    # Novel reader
│   │   ├── read.poem.$id.tsx     # Poem reader
│   │   ├── read.story.$id.tsx    # Story reader
│   │   ├── profile.reader.tsx    # Reader profile
│   │   ├── profile.writer.tsx    # Writer portfolio
│   │   └── README.md
│   │
│   ├── styles.css            # Global styles
│   ├── router.tsx            # Router configuration
│   ├── server.ts             # Server entry point
│   └── start.ts              # App entry point
│
├── public/                   # Static assets
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── tailwind.config.js        # Tailwind CSS configuration
```

---

## Technology Stack

### Frontend Framework
- **React 18** - UI library
- **TanStack Router** - Client-side routing
- **TanStack React Query** - Data fetching and caching
- **TanStack React Start** - Full-stack framework

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless component library
- **Shadcn/ui** - Pre-built components using Radix UI

### UI Components
- 30+ pre-built UI components (buttons, dialogs, dropdowns, etc.)
- Custom components: Navbar, ContentCard, Logo, ReadingTimeFilter

### Development Tools
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **Prettier** - Code formatting

### Icons
- **Lucide React** - Icon library with 400+ icons

### Additional Libraries
- **@hookform/resolvers** - Form validation resolvers
- **React Hook Form** - Form state management
- **Date-fns** - Date utilities
- **Sonner** - Toast notifications
- **cmdk** - Command palette component

---

## Core Components

### 1. Navbar Component
**File:** `src/components/Navbar.tsx`

**Purpose:** Main navigation header visible on all pages

**Features:**
- Logo and branding (Adiverse with image)
- Navigation links: Feed, Explore, Library
- Search bar (functional UI, needs backend integration)
- Dark/Light theme toggle
- Write button (direct link to studio)
- User dropdown menu with:
  - Reader profile
  - Writer portfolio
  - Settings
  - Sign out

**Key Functionality:**
```
Theme Toggle → Calls useTheme().toggle()
    ↓
Updates root element class → localStorage saved
    ↓
UI re-renders with appropriate colors
```

---

### 2. Logo Component
**File:** `src/components/Logo.tsx`

**Purpose:** Display brand logo with text

**Features:**
- Imports logo image from `src/logo.png`
- Uses Tailwind for styling
- Responsive sizing (h-8 w-8)
- Clickable link to home page

**Code:**
```typescript
import logoImage from "../logo.png";
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoImage} alt="Adiverse Logo" className="h-8 w-8" />
      <span className="font-display text-xl font-bold tracking-tight">Adiverse</span>
    </div>
  );
}
```

---

### 3. ContentCard Component
**File:** `src/components/ContentCard.tsx`

**Purpose:** Display content preview (poem, story, novel)

**Features:**
- Dynamic gradient background based on content type
- Content type badge (poem/story/novel)
- Genre label
- Title and excerpt
- Author name
- Reading time estimate
- View count, bookmark count
- Featured variant (larger for homepage hero)
- Hover animation (lift effect)

**Data Used:**
- Title, Author, Excerpt
- Genre, Type, Cover (gradient)
- Read time, Views, Bookmarks

**Responsive Design:**
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns
- Featured: 2x2 on desktop

---

### 4. ReadingTimeFilter Component
**File:** `src/components/ReadingTimeFilter.tsx`

**Purpose:** Filter content by reading time/type

**Filters:**
1. **All** - Everything available
2. **Under 5 min** - Poetry (poems)
3. **5-20 min** - Short stories
4. **20+ min** - Novels and long-form

**Features:**
- Icon for each category
- Active state styling (primary color)
- Smooth transitions
- Responsive grid (2 cols mobile, 4 cols desktop)

**Workflow:**
```
User clicks filter
    ↓
onChange triggered
    ↓
Filter value updated in parent
    ↓
Content list re-filtered
    ↓
Cards updated
```

---

## Routes & Pages

### 1. Root Layout (`__root.tsx`)
**Purpose:** Application shell and global setup

**Features:**
- React Query setup with QueryClient
- Theme provider initialization
- Navbar component
- Error boundary with 404 and error pages
- Global meta tags and head configuration
- Font imports from Google Fonts:
  - Playfair Display (display font)
  - Lora (reading font)
  - Merriweather (serif)
  - Inter (sans-serif)

**Meta Tags:**
```typescript
{
  title: "Adiverse — Where every story finds a home",
  description: "A premium literary sanctuary for poems, short stories, and novels.",
  og:title: "Adiverse",
  og:type: "website"
}
```

---

### 2. Home/Feed Page (`index.tsx`)
**Route:** `/`

**Purpose:** Main landing page and content feed

**Sections:**
1. **Hero Section**
   - Tagline: "A literary sanctuary"
   - Main heading: "Where every story finds a home"
   - Call-to-action buttons:
     - "Start reading" → `/explore`
     - "Open the studio" → `/write`
   - Featured quote display

2. **Reading Time Filter**
   - Filter by reading intent (all, poems, stories, novels)
   - Dynamically updates content display

3. **Content Grid**
   - Featured card (2x2 on large screens)
   - Rest of content in 3-column grid
   - Responsive: 1 col mobile, 2 col tablet, 3 col desktop

**Workflow:**
```
Load page
    ↓
Get all content from CONTENT array
    ↓
User selects filter → Content re-filtered
    ↓
Display featured item + grid
    ↓
Click card → Navigate to appropriate reader
```

**Data:** Uses CONTENT from `mock-data.ts`

---

### 3. Explore Page (`explore.tsx`)
**Route:** `/explore`

**Purpose:** Browse and discover content by genre

**Features:**
1. **Genre Filter Buttons**
   - All (shows all content)
   - Lyric (poems)
   - Elegy (poems)
   - Magical Realism (stories)
   - Literary (stories)
   - Historical Fiction (novels)
   - Speculative (novels)

2. **Content Grid**
   - Same 3-column layout as home
   - Updates when genre changes
   - Click card to read

**Workflow:**
```
Load page
    ↓
Display genre filter buttons
    ↓
User selects genre
    ↓
Filter content by genre
    ↓
Update grid display
    ↓
Click card → Navigate to reader
```

---

### 4. Writing Studio (`write.tsx`)
**Route:** `/write`

**Purpose:** Full-featured writing environment

**Writing Tools:**
1. **Text Formatting**
   - Bold, Italic, Underline, Strikethrough
   - Text alignment (left, center, right)
   - Lists (bulleted, numbered)
   - Block quotes
   - Links

2. **Font & Styling Options**
   - Fonts: Merriweather, Playfair Display, Lora, Inter
   - Font size: 14-28px
   - Line height: 1.4 - 2.2
   - Text highlight colors
   - Text colors

3. **Canvas/Theme Options**
   - Pure White
   - Warm Sepia (#f4ecd8)
   - Soft Gray
   - Night mode (#0f1320)

4. **Content Type Selection**
   - Poem (short form)
   - Story (medium form)
   - Novel (long form with chapters)

5. **Writing Stats Panel**
   - Word count
   - Character count
   - Estimated reading time (words ÷ 200)

6. **Actions**
   - Save draft button
   - Preview button
   - Publish option (UI ready)

**Editor Features:**
- contentEditable div for rich text
- Uses document.execCommand() for formatting
- Real-time stats calculation
- Title input field

**Workflow:**
```
User enters studio
    ↓
Select content type (poem/story/novel)
    ↓
Set title
    ↓
Choose font, size, line height
    ↓
Select canvas theme
    ↓
Write content using toolbar
    ↓
Watch stats update in real-time
    ↓
Save draft / Preview
```

---

### 5. Novel Reader (`read.novel.$id.tsx`)
**Route:** `/read/novel/:id`

**Purpose:** Read novels with chapter navigation

**Features:**
1. **Sidebar Table of Contents**
   - Collapsible (toggle with X button)
   - Lists all chapters
   - Active chapter highlighting
   - Click to jump to chapter
   - Shows chapter number and title

2. **Reading Controls**
   - Font size adjustment (14-24px)
   - Previous/Next chapter buttons
   - Chapter progress indicator (1/12)

3. **Content Display**
   - Novel title at top
   - Current chapter title
   - Auto-bookmark indicator
   - Full chapter body
   - Serif font (font-serif)
   - Responsive padding

4. **Comments Section** ⭐ *New Feature*
   - Comment count display
   - Textarea for new comments
   - Send button
   - List of comments with:
     - Author name
     - Comment timestamp
     - Comment text
   - Empty state message

5. **Persistent Features**
   - Auto-saves reading position in localStorage
   - Resumes from last read position
   - Remembers font size preference

**Data Structure:**
- Chapters array with: id, title, body
- Content metadata

**Workflow:**
```
Load novel page (id from URL)
    ↓
Fetch content by id
    ↓
Load saved reading position from localStorage
    ↓
Set chapter index
    ↓
Display sidebar with chapters
    ↓
User interacts:
  - Click chapter → Update index → Scroll to top
  - Adjust font size → Update state → Re-render
  - Add comment → Add to state → Display
  - Next/Previous → Navigate chapters
```

---

### 6. Story Reader (`read.story.$id.tsx`)
**Route:** `/read/story/:id`

**Purpose:** Read short stories with progress tracking

**Features:**
1. **Reading Progress Bar**
   - Fixed progress bar at top
   - Updates as user scrolls
   - Primary color indicator

2. **Header Section**
   - Back button to home
   - Story metadata:
     - Genre
     - Title
     - Author
     - Reading time

3. **Content Display**
   - Serif font (prose-reading class)
   - Paragraph spacing
   - Auto-formatted body

4. **Comments Section** ⭐ *New Feature*
   - Same as novel reader
   - Comments on entire story

**Workflow:**
```
Load story page
    ↓
Display metadata
    ↓
Render paragraphs from body
    ↓
Attach scroll listener
    ↓
Calculate progress percentage
    ↓
Update progress bar width
    ↓
User can comment at bottom
```

---

### 7. Poem Reader (`read.poem.$id.tsx`)
**Route:** `/read/poem/:id`

**Purpose:** Read poetry with focused presentation

**Features:**
1. **Poem Display**
   - Centered layout
   - Genre and title at top
   - Author byline (italic)
   - Preserved whitespace (preformatted text)
   - Larger serif font (text-xl)
   - Generous line height (2.2)
   - Centered alignment

2. **Action Buttons**
   - Heart (like button)
   - Bookmark button
   - Share button
   - Rounded button styling

3. **Comments Section** ⭐ *New Feature*
   - Comments on poem below action buttons

**Workflow:**
```
Load poem page
    ↓
Display title and author
    ↓
Preserve poem formatting with <pre>
    ↓
Show action buttons
    ↓
Display comments section
```

---

### 8. Reader Profile (`profile.reader.tsx`)
**Route:** `/profile/reader`

**Purpose:** Display reader's statistics and bookmarks

**User Identity:**
- Name: Avery Lin
- Role: Reader
- Joined: 2024
- Stories read: 142

**Sections:**
1. **Profile Header**
   - Avatar with initial "A"
   - User info
   - Switch to writer view button

2. **Reading Statistics (4 cards)**
   - Reading history: 142
   - Bookmarks: 37
   - Likes: 284
   - Lists: 9
   - Each with icon and count

3. **Continue Reading Section**
   - Shows last 3 read items
   - ContentCard grid

4. **Bookmarks Section**
   - Shows bookmarked items
   - ContentCard grid

**Purpose:** Reader statistics and quick access to reading list

---

### 9. Writer Profile (`profile.writer.tsx`)
**Route:** `/profile/writer`

**Purpose:** Display writer's portfolio and statistics

**User Identity:**
- Name: Imogen Vale
- Quote: "Cartographer of small, quiet things."
- Author of published works

**Sections:**
1. **Profile Header**
   - Avatar with initial "I"
   - Author bio/quote
   - New piece button → `/write`

2. **Writing Statistics (4 cards)**
   - Total views: 204k
   - Bookmarks: 12.4k
   - Followers: 3,210
   - Drafts: 6
   - Each with icon and count

3. **Published Works Section**
   - Shows 4 published pieces
   - ContentCard grid

4. **Drafts Section**
   - List of unpublished drafts
   - Shows title, edit date, word count
   - "Continue writing" button for each
   - Expandable list format

**Purpose:** Writer portfolio and work management

---

## Features & Workflows

### Reading Workflow

```
┌─────────────────────────────────────────┐
│         Start at Home (/)                │
│  ┌──────────────────────────────────┐   │
│  │  Hero + Content Grid             │   │
│  │  Filter by reading time          │   │
│  └──────────────────────────────────┘   │
└──────────────┬──────────────────────────┘
               │
        Click ContentCard
               │
               ├─→ Poem → /read/poem/$id
               │   ├─ Centered display
               │   ├─ Action buttons
               │   └─ Comments section
               │
               ├─→ Story → /read/story/$id
               │   ├─ Progress bar
               │   ├─ Full text
               │   └─ Comments section
               │
               └─→ Novel → /read/novel/$id
                   ├─ Chapter sidebar
                   ├─ Navigation controls
                   ├─ Font adjustment
                   └─ Comments section
```

### Writing Workflow

```
┌──────────────────────────────────┐
│     Click Write Button (→ /write) │
└──────────────┬───────────────────┘
               │
        Select Content Type
               │
        ├─ Poem (short)
        ├─ Story (medium)
        └─ Novel (long)
               │
        Enter Title
               │
        ├─ Select Font (4 options)
        ├─ Choose Font Size (14-28px)
        ├─ Set Line Height (1.4-2.2)
        └─ Pick Canvas (4 themes)
               │
        Write with Toolbar
               │
        ├─ Text formatting (B/I/U)
        ├─ Alignment
        ├─ Lists
        ├─ Quotes
        └─ Links
               │
        Watch Stats Update
        │
        ├─ Words
        ├─ Characters
        └─ Read time (words ÷ 200)
               │
        Save Draft / Preview
```

### Profile Viewing Workflow

```
┌───────────────────────────────────┐
│   Click User Icon → Dropdown       │
│  ┌─────────────────────────────┐  │
│  │ • Reader profile            │  │
│  │ • Writer portfolio          │  │
│  │ • Settings                  │  │
│  │ • Sign out                  │  │
│  └─────────────────────────────┘  │
└───────────────────────────────────┘

Reader Profile (/profile/reader)
├─ View reading stats
├─ See reading history
├─ Access bookmarks
└─ Switch to writer view

Writer Profile (/profile/writer)
├─ View publication stats
├─ See published works
├─ View draft list
├─ Continue editing drafts
└─ Write new piece
```

### Comment System

All three readers (novel, story, poem) have comment functionality:

```
User reads content
    ↓
Scrolls to bottom
    ↓
Sees comment section with count
    ↓
Writes comment in textarea
    ↓
Clicks "Comment" button
    ↓
Comment added to list with:
  - Author name ("You")
  - Current timestamp
  - Comment text
    ↓
Can view all comments
    ↓
Comments stored in component state
    (Note: Would need backend for persistence)
```

---

## Data Structure

### Content Interface

```typescript
interface Content {
  id: string;              // Unique identifier (p1, s1, n1, etc.)
  type: ContentType;       // "poem" | "story" | "novel"
  title: string;           // Content title
  author: string;          // Author name
  excerpt: string;         // Short preview text
  genre: string;           // Genre category
  readTime: number;        // Reading time in minutes
  views: number;           // View count
  bookmarks: number;       // Bookmark count
  tags: string[];          // Content tags
  cover: string;           // CSS gradient background
  body?: string;           // Full content text (for poems/stories)
  chapters?: Array<{       // For novels only
    id: string;
    title: string;
    body: string;
  }>;
}
```

### Mock Content Examples

**Poem:**
```typescript
{
  id: "p1",
  type: "poem",
  title: "Cartography of Stillness",
  author: "Imogen Vale",
  genre: "Lyric",
  readTime: 2,
  body: "I keep a small atlas...",
  ...
}
```

**Story:**
```typescript
{
  id: "s1",
  type: "story",
  title: "The Lamplighter's Apprentice",
  author: "Theo Aldwin",
  genre: "Magical Realism",
  readTime: 12,
  body: "Full story text...",
  ...
}
```

**Novel:**
```typescript
{
  id: "n1",
  type: "novel",
  title: "The Cartographer of Lost Cities",
  author: "Eliana Voss",
  genre: "Historical Fiction",
  readTime: 480,
  chapters: [
    { id: "c1", title: "Chapter 1: The Atlas", body: "..." },
    { id: "c2", title: "Chapter 2: The Letter", body: "..." },
    ...
  ],
  ...
}
```

---

## User Profiles

### 1. Reader Profile

**User:** Avery Lin

**Stats:**
- Reader since 2024
- 142 stories read
- 37 bookmarks
- 284 likes
- 9 reading lists

**Features:**
- View reading history
- Access bookmarks instantly
- Quick reading stats
- Resume reading section
- Switch to writer profile

**Purpose:** Track reading activity and manage bookmarks

**Navigation:**
```
Navbar User Icon
    ↓
Click "Reader profile"
    ↓
/profile/reader
    ├─ Profile card with avatar
    ├─ Statistics display
    ├─ Continue reading (3 items)
    └─ Bookmarks section
```

---

### 2. Writer Profile

**User:** Imogen Vale

**Bio Quote:** "Cartographer of small, quiet things."

**Stats:**
- 204k total views
- 12.4k bookmarks
- 3,210 followers
- 6 drafts

**Features:**
- Display published works (4 shown)
- View and edit drafts
- One-click "Continue writing"
- Create new piece
- Track publication stats

**Purpose:** Manage writing portfolio and work-in-progress

**Navigation:**
```
Navbar User Icon
    ↓
Click "Writer portfolio"
    ↓
/profile/writer
    ├─ Profile card with avatar
    ├─ Statistics display
    ├─ Published works grid
    └─ Drafts list
        └─ Continue writing → /write
```

---

## Component Breakdown

### UI Components (from Shadcn/ui)

Located in `src/components/ui/` - 30+ components including:

- **accordion.tsx** - Expandable sections
- **alert-dialog.tsx** - Confirmation dialogs
- **alert.tsx** - Alert messages
- **avatar.tsx** - User avatars
- **badge.tsx** - Labels/tags
- **button.tsx** - Button variants
- **card.tsx** - Card container
- **checkbox.tsx** - Checkbox input
- **dialog.tsx** - Modal dialogs
- **dropdown-menu.tsx** - Menu component (used in Navbar)
- **form.tsx** - Form utilities
- **input.tsx** - Text input
- **label.tsx** - Form labels
- **select.tsx** - Dropdown select
- **tabs.tsx** - Tab interface
- **textarea.tsx** - Multi-line input
- **tooltip.tsx** - Hover tooltips

And many more...

---

### Custom Components

#### 1. **Navbar.tsx**
- Global navigation header
- Theme toggle
- Search input
- User account menu
- Write button
- Logo display

#### 2. **Logo.tsx**
- Brand logo component
- Imports image from src/logo.png
- Styled with Tailwind
- Links to home page

#### 3. **ContentCard.tsx**
- Displays content preview
- Gradient backgrounds
- Meta information (views, bookmarks)
- Responsive grid layout
- Featured variant

#### 4. **ReadingTimeFilter.tsx**
- Filter content by reading time
- 4 filter options
- Icon + label per option
- Active state styling

---

## Theme System

**File:** `src/lib/theme.tsx`

**Features:**
- Light and dark mode support
- Context API for theme management
- localStorage persistence
- System preference detection

**Usage:**
```typescript
const { theme, toggle } = useTheme();
theme // "light" | "dark"
toggle() // Switch theme
```

**Implementation:**
- ThemeProvider wraps app in __root.tsx
- Adds/removes "dark" class to root element
- Saves preference to localStorage
- Detects system preference on first load

---

## Styling Approach

**Tailwind CSS + Radix UI**
- Utility-first CSS with Tailwind
- Component library from Radix UI (headless)
- Pre-built components via Shadcn/ui
- Custom CSS for specific effects (glass effect, gradients)

**Color Scheme:**
- Primary color (for accents and active states)
- Background/Foreground (light/dark aware)
- Card background
- Border colors
- Muted text colors

**Responsive Design:**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid layouts that adapt
- Hidden elements on mobile (md:flex, etc.)

---

## State Management

### Component State
- useState for local state
- useRef for DOM references
- useContext for theme

### Data Flow
- Mock data from `src/lib/mock-data.ts`
- React Query for potential API integration
- localStorage for persistence (reading position, theme)

### Comments System
- Stored in component state (local)
- Each comment has: id, author, text, timestamp
- Future: Backend integration needed for persistence

---

## Keyboard & Accessibility

**Features:**
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- High contrast text

**Theme Toggle:** 
- Aria-label on button
- Keyboard accessible

**Dropdowns:**
- Radix UI provides accessibility features
- Focus management
- Arrow key navigation

---

## Future Enhancements

1. **Backend Integration**
   - Database for content
   - User authentication
   - Persistent comments
   - Reading history

2. **Search & Filtering**
   - Full-text search
   - Advanced filters (date, author, etc.)
   - Saved searches

3. **Social Features**
   - Follow authors
   - Reading lists
   - User interactions
   - Recommendations

4. **Writer Tools**
   - Publish to platform
   - Analytics dashboard
   - Reader feedback
   - Draft versioning

5. **Enhanced Comments**
   - User replies
   - Comment threading
   - Like/upvote
   - Edit/delete

6. **Mobile App**
   - Native iOS/Android
   - Offline reading
   - Push notifications
   - Native text selection

---

## File Naming Conventions

### Routes
- Kebab-case: `read.novel.$id.tsx`
- Dynamic segments: `$id`, `$slug`
- Nested routes: `profile.reader.tsx`

### Components
- PascalCase: `ContentCard.tsx`, `Navbar.tsx`
- Layout components: `__root.tsx` (double underscore)

### Utilities & Types
- camelCase files: `mock-data.ts`, `utils.ts`
- Interfaces exported from same file

### Styling
- Tailwind classes inline
- Global styles in `styles.css`

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

---

## Project Stats

- **Pages:** 9 (Home, Explore, Write, 3 Readers, 2 Profiles, Root)
- **Components:** 4 custom + 30+ from Shadcn/ui
- **Routes:** Dynamic routing with TanStack Router
- **Content Types:** 3 (Poem, Story, Novel)
- **Mock Data:** 6 content items (varying types)

---

## Key Libraries & Dependencies

| Library | Purpose | Version |
|---------|---------|---------|
| React | UI Framework | Latest |
| @tanstack/react-router | Routing | ^1.168.25 |
| @tanstack/react-query | Data fetching | ^5.83.0 |
| Tailwind CSS | Styling | ^4.2.1 |
| Radix UI | Component primitives | Latest |
| Lucide React | Icons | Latest |
| React Hook Form | Form management | Latest |
| Date-fns | Date utilities | ^4.1.0 |

---

## Conclusion

Adiverse is a well-structured, modern literary platform with:
- Clean, component-based architecture
- Beautiful, responsive UI
- Complete reading and writing experiences
- Multiple user profile types
- Extensible design for future features

The platform provides separate experiences for readers (discovering and reading content) and writers (creating and publishing), all within a cohesive, elegant interface.

---

**Last Updated:** June 16, 2026
**Project Version:** 1.0
**Status:** Active Development
