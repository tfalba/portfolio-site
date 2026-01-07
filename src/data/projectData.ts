import type { CarouselImage } from "../components/ImageCarousel";
import { imageSets } from "./imageSets";

type ProjectDescription = {
  overview: string;
  steps: string[];
};

type ProjectDetails = {
  summary: string;
  keyFeatures: string[];
  howBuilt: string[];
};

export type Project = {
  id: string;
  name: string;
  role?: string;
  techStack?: string;
  summary: string;
  description: ProjectDescription;
  details: ProjectDetails;
  liveUrl: string;
  githubUrl: string;
  images: CarouselImage[];
  imagesPhone: CarouselImage[];
};

const { topKnot, colorMyMusic, casinoGames, puzzleQuest, partyGames, castlesHearts, karaokeNight } =
  imageSets;

export const projects: Project[] = [
  {
    id: "1",
    name: "Top Knot Holistics",
    role: "design, front-end, back-end",
    techStack: "React, TypeScript, Tailwind CSS, Google Calendar API",
    summary: "A mobile-first React site for a massage therapist featuring service cards, a practitioner story, and embedded scheduling—crafted to feel calming, credible, and effortless to book.",
    description: {
      overview:
        "KB Massage / Top Knot Holistics is a single-page, mobile-responsive site created to showcase a private massage therapy practice with a calm, trustworthy voice.",
      steps: [
        "Opened with a spacious hero, brand photography, and a single CTA so visitors immediately know what services are available and how to book.",
        "Organized every modality into card-based sections with short descriptions and price cues for quick scanning on phones.",
        "Paired the practitioner bio with testimonials and credentials to reinforce safety, continuing education, and trauma-informed care.",
        "Embedded Google Calendar scheduling so clients can reserve appointments without leaving the page.",
      ],
    },
    details: {
      summary:
        "Service cards, practitioner bio, and testimonials combine to tell the brand story, while the embedded Google Calendar keeps the booking flow within the site. Flexible content blocks let the owner refresh copy or photography without redesigning the layout.",
      keyFeatures: [
        "Responsive section grid that reorders content for mobile, tablet, and desktop breakpoints.",
        "Copy-driven storytelling that highlights specialties like prenatal massage to attract the right clientele.",
        "Inline appointment booking plus map and contact links so clients never hit a dead end.",
      ],
      howBuilt: [
        "React + TypeScript components styled with Tailwind CSS gradients and custom typography tokens.",
        "A simple JSON content model that powers cards, testimonials, and FAQs without a CMS.",
        "Deployed to Vercel with preview builds for quick design iterations and monitoring.",
      ],
    },
    liveUrl: "https://kb-massage.vercel.app/",
    githubUrl: "https://github.com/tfalba/kb-massage",
    images: topKnot.desktop,
    imagesPhone: topKnot.phone,
  },
  {
    id: "2",
    name: "Color My Music",
    role: "design, front-end, back-end",
    techStack: "React + TypeScript, Tailwind CSS, Open AI, Spotify API, Pixabay API",
    summary: "A React app that transforms Spotify playlists into color palettes and pairs them with matching Pixabay artwork for sharable visual “music stories.",
    description: {
      overview:
        "Color My Music pairs Spotify listening data with Pixabay imagery so playlists become sharable color stories.",
      steps: [
        "Authenticate with Spotify to pull saved playlists, top tracks, or search results directly into the UI.",
        "Analyze tempo, danceability, and mood metrics to derive a color palette that represents the playlist energy.",
        "Trigger a Pixabay search that suggests artwork matching the generated palette.",
        "Save favorite combinations locally so users can revisit them or share screenshots.",
      ],
    },
    details: {
      summary:
        "Users authenticate with Spotify, select playlists, and the app fetches audio features to pick a color palette before pairing it with matching Pixabay artwork. Debounced search and optimistic loading keep the experience snappy, and saved palettes persist between sessions via local storage.",
      keyFeatures: [
        "OAuth flow with Spotify plus scoped tokens so people can browse securely.",
        "Palette generator that remaps energy, valence, and tempo into HSL color ramps.",
        "Pixabay drawer with live preview thumbnails and error handling for empty states.",
      ],
      howBuilt: [
        "React + TypeScript front end bootstrapped with Vite for fast refresh.",
        "Custom hooks encapsulate Spotify and Pixabay requests with caching and abort logic.",
        "Tailwind-powered layout with CSS Grid keeps artwork, palette, and controls aligned on every screen size.",
      ],
    },
    liveUrl: "https://app.color-my-music.app/",
    githubUrl: "https://github.com/tfalba/spotify-pixabay-app",
    images: colorMyMusic.desktop,
    imagesPhone: colorMyMusic.phone,
  },
  {
    id: "3",
    name: "Casino Games",
    role: "design, front-end, back-end",
    techStack: "React, TypeScript, Tailwind CSS, Python, Vercel",
    summary: "A React + TypeScript project featuring Blackjack and War, powered by a Python backend for game logic and a unified front-end design system for cards, chips, and tables.",
    description: {
      overview:
        "Casino Games is a playground of mini experiences—Blackjack, Roulette, and arcade-influenced parlor games—designed to test component composability.",
      steps: [
        "Players choose from multiple games inside one interface, each with its own rule set and assets.",
        "A shared bankroll, streak tracker, and achievement badges carry across games to encourage experimentation.",
        "Contextual tips explain rules inline so casual players can jump in without reading docs.",
        "Sound toggles and accessibility controls stay docked on the edge of the viewport for quick adjustments.",
      ],
    },
    details: {
      summary:
        "Includes Blackjack, Roulette, and a handful of mini skill games inside a single React experience. Shared UI components keep chips, cards, and tables consistent, and a global store handles bankroll math, streaks, and sound effects toggles across games.",
      keyFeatures: [
        "Shared UI library for cards, chips, tables, and HUD elements so each game feels cohesive.",
        "Deterministic shuffling and wheel algorithms seeded for predictable demos but randomized for real play.",
        "A coaching overlay that surfaces hints such as optimal Blackjack decisions based on the deck state.",
      ],
      howBuilt: [
        "React + TypeScript front end with modular components for cards, chips, tables, and HUD elements.",
        "Python backend handles game logic endpoints such as shuffling, wheel spins, bankroll math, and probability helpers, providing deterministic or randomized results based on mode.",
        "Custom hooks encapsulate timers, probability helpers, and keyboard shortcuts.",
        "Tailwind theme tokens drive casino-inspired gradients, neon glows, and motion-safe animations.",
      ],
    },
    liveUrl: "https://casino-games-sooty.vercel.app/",
    githubUrl: "https://github.com/tfalba/war-monorepo",
    images: casinoGames.desktop,
    imagesPhone: casinoGames.phone,
  },
  {
    id: "4",
    name: "Puzzle Quest",
    role: "design, front-end, back-end",
    techStack: "React, TypeScript, Tailwind CSS, Pixabay API, Vercel",
    summary:
      "Create a personal sliding puzzle from any Pixabay photo, play it directly in the browser, and celebrate when puzzle is complete.",
    description: {
      overview:
        "PuzzleQuest Studio turns image hunting and puzzle solving into a single, highly tactile experience.",
      steps: [
        "Hero + Controls: A cinematic banner frames the game and the floating \"+\" button opens the media drawer.",
        "Pixabay Drawer: The slide-out search panel debounces queries, filters for almost-square photos, and snaps shut once an image is selected.",
        "Puzzle Board: Drag, drop, and click-to-move interactions keep tiles lively, while Shuffle and Solve provide instant demos.",
        "Win Celebration: When the puzzle is complete, the missing tile fades in, the grid dissolves, and the full image is revealed.",
      ],
    },
    details: {
      summary:
        "Board state, celebration timers, Pixabay results, and puzzle settings are isolated per hook so the UI stays responsive even when images load slowly. The drawer, grid, and phone-sized puzzle board rely on glassmorphism styles and CSS grid templates that collapse gracefully for touch devices.",
      keyFeatures: [
        "Interactive Pixabay search with efficient debouncing, error states, and a scrollable grid of safe images.",
        "Puzzle mechanics that support drag, drop, click-to-move, solve, and shuffle interactions.",
        "Finish animations timed to reveal the missing tile and celebrate the completed image.",
        "Responsive styling powered by Tailwind custom colors, gradients, and glassmorphism.",
      ],
      howBuilt: [
        "React 18 + Vite + TypeScript deliver fast DX and type safety.",
        "Tailwind CSS custom palette (nickBlack, nickRust, nickTeal, etc.) defines the visual language.",
        "State and effects hooks manage board logic, Pixabay results, modal visibility, and celebration timers.",
        "Pixabay API integration uses `VITE_PIXABAY_API_KEY` and filters results for puzzle parity.",
        "Tooling leans on the Vite + ESLint template with strict TypeScript settings and hot module reload.",
      ],
    },
    liveUrl: "https://puzzle-game-blue.vercel.app/",
    githubUrl: "https://github.com/tfalba/puzzle-game",
    images: puzzleQuest.desktop,
    imagesPhone: puzzleQuest.phone,
  },
  {
    id: "5",
    name: "Charades",
    role: "design, front-end, back-end",
    techStack:
      "React, TypeScript, Vite, Tailwind CSS, Express, OpenAI, shared packages",
    summary:
      "Spin a neon wheel to pick the next actor, fetch OpenAI-crafted prompts, and run five-round charades matches with timers and scoreboards in one browser tab.",
    description: {
      overview:
        "Charades Game Night Hub keeps team setup, wheel spins, prompt delivery, timers, and scoring in sync so hosts can run party-length matches without juggling multiple tools.",
      steps: [
        "Build teams through the slide-out player drawer, assign colors, and persist the roster via localStorage for future sessions.",
        "Spin the SVG prize wheel to pick the next actor, then choose topic and difficulty to recolor the table and fetch five fresh prompts.",
        "Kick off the five-minute countdown; each actor can burn 30 seconds for an alternate hint before logging Got It or Surrender.",
        "Track ✓/✕ results across five rounds in the scoreboard and flash celebratory overlays when turns end.",
      ],
    },
    details: {
      summary:
        "GameContext orchestrates players, prompts, timers, wheel spins, and scoreboard updates so the UI stays synchronized across every section of the board.",
      keyFeatures: [
        "OpenAI-backed prompt generation with duplicate avoidance and per-topic history stored in `apps/api/data/challenge-history.json`.",
        "Topic-driven themes that swap logos, accent colors, and badges whenever a new category is selected.",
        "Alternate prompt penalty system that subtracts 30 seconds, forcing teams to weigh hint requests mid-turn.",
      ],
      howBuilt: [
        "React 18 + Vite + TypeScript frontend paired with an Express + TypeScript API, both sharing Topic/Difficulty types via workspace aliases.",
        "GameContext centralizes prompts, countdown timers, wheel spins, and scoreboard logic for predictable state updates.",
        "API route `apps/api/src/routes.ts` calls `gpt-4o-mini` with strict difficulty rules and deduped history files before returning prompts.",
      ],
    },
    liveUrl: "",
    githubUrl: "https://github.com/tfalba/charades-mono",
    images: partyGames.desktop,
    imagesPhone: partyGames.phone,
  },
  {
    id: "6",
    name: "Castles & Heaerts",
    role: "design, front-end, back-end",
    techStack:
      "React, TypeScript, Vite, Express, Google Auth, Google Firebase",
    summary:
      "Spin a neon wheel to pick the next actor, fetch OpenAI-crafted prompts, and run five-round charades matches with timers and scoreboards in one browser tab.",
    description: {
      overview:
        "Charades Game Night Hub keeps team setup, wheel spins, prompt delivery, timers, and scoring in sync so hosts can run party-length matches without juggling multiple tools.",
      steps: [
        "Build teams through the slide-out player drawer, assign colors, and persist the roster via localStorage for future sessions.",
        "Spin the SVG prize wheel to pick the next actor, then choose topic and difficulty to recolor the table and fetch five fresh prompts.",
        "Kick off the five-minute countdown; each actor can burn 30 seconds for an alternate hint before logging Got It or Surrender.",
        "Track ✓/✕ results across five rounds in the scoreboard and flash celebratory overlays when turns end.",
      ],
    },
    details: {
      summary:
        "GameContext orchestrates players, prompts, timers, wheel spins, and scoreboard updates so the UI stays synchronized across every section of the board.",
      keyFeatures: [
        "OpenAI-backed prompt generation with duplicate avoidance and per-topic history stored in `apps/api/data/challenge-history.json`.",
        "Topic-driven themes that swap logos, accent colors, and badges whenever a new category is selected.",
        "Alternate prompt penalty system that subtracts 30 seconds, forcing teams to weigh hint requests mid-turn.",
      ],
      howBuilt: [
        "React 18 + Vite + TypeScript frontend paired with an Express + TypeScript API, both sharing Topic/Difficulty types via workspace aliases.",
        "GameContext centralizes prompts, countdown timers, wheel spins, and scoreboard logic for predictable state updates.",
        "API route `apps/api/src/routes.ts` calls `gpt-4o-mini` with strict difficulty rules and deduped history files before returning prompts.",
      ],
    },
    liveUrl: "https://castles-and-hearts.web.app/",
    githubUrl: "https://github.com/tfalba/ch-initial",
    images: castlesHearts.desktop,
    imagesPhone: castlesHearts.phone,
  },
  {
    id: "7",
    name: "Karaoke Night",
    role: "design, front-end, back-end",
    techStack:
      "React, TypeScript, Vite, Tailwind CSS, YouTube Data API, react-youtube",
    summary:
      "A club-mode karaoke queue that auto-finds YouTube karaoke versions, rotates singers fairly, and tracks the session in local storage.",
    description: {
      overview:
        "Karaoke Night turns a shared queue into a smooth, fair rotation by combining YouTube search, karaoke-focused scoring, and a lightweight local state machine.",
      steps: [
        "Pick one or more singers and enter a song request.",
        "Search YouTube for a karaoke version and score candidates by keywords, channel reputation, and view counts.",
        "Add the best match to the queue with singer metadata and avatars.",
        "Advance to the next singer using weighted rotation that avoids repeats when possible.",
        "Persist the queue and now-playing state until the party is reset.",
      ],
    },
    details: {
      summary:
        "Singers add songs to the queue, the app selects the best karaoke video from YouTube, and a weighted picker balances turns based on remaining songs. The interface keeps the main video stage clear, while drawers manage queue and rules.",
      keyFeatures: [
        "Weighted singer rotation that avoids the last singer when possible.",
        "YouTube scoring tuned for karaoke channels and strong karaoke-version intent.",
        "Queue drawer with make-next overrides and per-entry removal.",
        "Local storage persistence with a one-click reset.",
      ],
      howBuilt: [
        "React + TypeScript UI bootstrapped with Vite for fast local iteration.",
        "Tailwind CSS neon theme with custom cards and drawer panels.",
        "YouTube Data API search + stats, embedded via react-youtube.",
        "Local storage persistence for entries, now-playing, and last singer state.",
      ],
    },
    liveUrl: "",
    githubUrl: "https://github.com/tfalba/portfolio-site",
    images: karaokeNight.desktop,
    imagesPhone: karaokeNight.phone,
  },
];
