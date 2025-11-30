import type { Project } from "../components/ProjectSection";
import { imageSets } from "./imageSets";

const { topKnot, colorMyMusic, casinoGames, puzzleQuest, partyGames } =
  imageSets;

export const projects: Project[] = [
  {
    id: "1",
    name: "Top Knot Holistics",
    role: "design, front-end, back-end",
    techStack: "React, TypeScript, Tailwind CSS, Vercel, Google Calendar",
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
    githubUrl: "",
    images: topKnot.desktop,
    imagesPhone: topKnot.phone,
  },
  {
    id: "2",
    name: "Color My Music",
    role: "design, front-end, back-end",
    techStack: "React, TypeScript, Tailwind CSS, Spotify API, Pixabay API",
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
    techStack: "React, TypeScript, Tailwind CSS, Zustand, Vercel",
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
    githubUrl: "",
    images: casinoGames.desktop,
    imagesPhone: casinoGames.phone,
  },
  {
    id: "4",
    name: "Puzzle Quest",
    role: "design, front-end, back-end",
    techStack: "React 18, TypeScript, Tailwind CSS, Zustand, Pixabay API, Vercel",
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
    liveUrl: "https://puzzle-game-3ity.vercel.app/",
    githubUrl: "https://github.com/tfalba/puzzle-game",
    images: puzzleQuest.desktop,
    imagesPhone: puzzleQuest.phone,
  },
  {
    id: "5",
    name: "Party Games",
    role: "design, front-end, back-end",
    techStack: "React, TypeScript, Node.js, Tailwind CSS, Socket.IO",
    summary: "A charades generator for multiple players in a simple group or on teams for categories including movies, books, songs, people, places, and things.",
    description: {
      overview:
        "Party Games is a lightweight Jackbox-style suite that lets remote friends jump into trivia, doodling, and voting matches with a single room code.",
      steps: [
        "A host spins up a lobby and shares the room code; everyone else joins from their phone browser.",
        "Each mini game (trivia, drawing prompts, meme battles) swaps in its own controls while keeping shared chat and scoreboards persistent.",
        "Server timers drive question pacing, give players enough time to answer, and keep the group in sync.",
        "Completion screens celebrate winners and offer instant rematch or lobby reset options.",
      ],
    },
    details: {
      summary:
        "Hosts trivia, drawing, and voting mini games with room codes so friends can play remotely. Real-time state sync is handled through Socket.IO, timers run on the server to keep everyone honest, and admin-only controls make it easy to reset lobbies.",
      keyFeatures: [
        "Cross-device lobby that works on desktop streaming to a TV plus phones as controllers.",
        "Custom avatars, quick reactions, and profanity filtering keep games playful but safe.",
        "Admin console lets the host skip rounds, pause timers, or boot trolls without stopping play.",
      ],
      howBuilt: [
        "React + TypeScript front end powered by Tailwind for layout and per-game theme variants.",
        "Node/Express backend with Socket.IO namespaces to isolate rooms and broadcast updates efficiently.",
        "Server-authoritative timers and validation to prevent cheating or double submissions.",
      ],
    },
    liveUrl: "https://app.color-my-music.app/",
    githubUrl: "",
    images: partyGames.desktop,
    imagesPhone: partyGames.phone,
  },
];
