import type { CarouselImage } from "../components/ImageCarousel";

import topKnot1 from "@/assets/top-knot/top-knot-1.png";
import topKnot2 from "@/assets/top-knot/top-knot-2.png";
import topKnot3 from "@/assets/top-knot/top-knot-3.png";
import topKnot4 from "@/assets/top-knot/top-knot-4.png";
import topKnot5 from "@/assets/top-knot/top-knot-5.png";
import topKnot1b from "@/assets/top-knot/top-knot-1b.png";
import topKnot2b from "@/assets/top-knot/top-knot-2b.png";
import topKnot3b from "@/assets/top-knot/top-knot-3b.png";
import topKnot4b from "@/assets/top-knot/top-knot-4b.png";
import topKnot5b from "@/assets/top-knot/top-knot-5b.png";

import spotify1 from "@/assets/spotify-pixabay/spotify-pixabay3.png";
import spotify2 from "@/assets/spotify-pixabay/spotify-pixabay2.png";
// import spotify3 from "@/assets/spotify-pixabay/spotify-pixabay1.png";
import spotify3 from "@/assets/spotify-pixabay/spotify-pixabay-1.png";

import spotify4 from "@/assets/spotify-pixabay/spotify-pixabay4.png";
import spotify1b from "@/assets/spotify-pixabay/spotify-pixabay3b.png";
import spotify2b from "@/assets/spotify-pixabay/spotify-pixabay2b.png";
// import spotify3b from "@/assets/spotify-pixabay/spotify-pixabay1b.png";
import spotify3b from "@/assets/spotify-pixabay/spotify-pixabay-1b.png";

import spotify4b from "@/assets/spotify-pixabay/spotify-pixabay4b.png";

import casino1 from "@/assets/casino-games/casino-games-1.png";
import casino2 from "@/assets/casino-games/casino-games-2.png";
import casino3 from "@/assets/casino-games/casino-games-3.png";
import casino4 from "@/assets/casino-games/casino-games-4.png";
import casino5 from "@/assets/casino-games/casino-games-5.png";
import casino3b from "@/assets/casino-games/casino-games-3b.png";

import puzzle1 from "@/assets/puzzle-quest/puzzle-quest1.png";
import puzzle2 from "@/assets/puzzle-quest/puzzle-quest2.png";
import puzzle3 from "@/assets/puzzle-quest/puzzle-quest3.png";
import puzzle4 from "@/assets/puzzle-quest/puzzle-quest4.png";
import puzzle5 from "@/assets/puzzle-quest/puzzle-quest5.png";
import puzzle1b from "@/assets/puzzle-quest/puzzle-quest1b.png";
import puzzle2b from "@/assets/puzzle-quest/puzzle-quest2b.png";
import puzzle3b from "@/assets/puzzle-quest/puzzle-quest3b.png";
import puzzle4b from "@/assets/puzzle-quest/puzzle-quest4b.png";
import puzzle5b from "@/assets/puzzle-quest/puzzle-quest5b.png";

import charades1 from "@/assets/charades/charades-1.png";
import charades2 from "@/assets/charades/charades-2.png";
import charades3 from "@/assets/charades/charades-3.png";
import charades4 from "@/assets/charades/charades-4.png";
import charades1b from "@/assets/charades/charades-1b.png";
import charades2b from "@/assets/charades/charades-2b.png";
import charades3b from "@/assets/charades/charades-3b.png";
import charades4b from "@/assets/charades/charades-4b.png";

import castlesHearts1 from "@/assets/castles-hearts/castles-hearts1.png";
import castlesHearts2 from "@/assets/castles-hearts/castles-hearts2.png";

import castlesHearts3 from "@/assets/castles-hearts/castles-hearts3.png";

import castlesHearts4 from "@/assets/castles-hearts/castles-hearts4.png";
import castlesHearts5 from "@/assets/castles-hearts/castles-hearts5.png";
import castlesHearts1b from "@/assets/castles-hearts/castles-hearts1b.png";
import castlesHearts2b from "@/assets/castles-hearts/castles-hearts2b.png";
import castlesHearts3b from "@/assets/castles-hearts/castles-hearts3b.png";
import castlesHearts4b from "@/assets/castles-hearts/castles-hearts4b.png";
import castlesHearts5b from "@/assets/castles-hearts/castles-hearts5b.png";
import karaokeNight1 from "@/assets/karaoke-night/karaoke-night1.png";
import karaokeNight2 from "@/assets/karaoke-night/karaoke-night2.png";
import karaokeNight3 from "@/assets/karaoke-night/karaoke-night3.png";


type AltFormatter = (index: number) => string | undefined;

const createImageList = (
  sources: Array<string | undefined>,
  formatAlt: AltFormatter,
): CarouselImage[] =>
  sources.map((src, index) => ({
    id: index + 1,
    src,
    alt: src ? formatAlt(index + 1) : undefined,
  }));

const normalizeLength = (
  desiredLength: number,
  values: Array<string | undefined> = [],
) => Array.from({ length: desiredLength }, (_, index) => values[index]);

const createImageSet = ({
  desktop,
  phone,
  prefix,
}: {
  desktop: Array<string | undefined>;
  phone?: Array<string | undefined>;
  prefix: string;
}) => {
  const normalizedPhone = normalizeLength(desktop.length, phone);
  return {
    desktop: createImageList(desktop, (index) => `${prefix}-${index}`),
    phone: createImageList(normalizedPhone, (index) => `${prefix}-${index}b`),
  };
};

export const imageSets = {
  topKnot: createImageSet({
    prefix: "tk",
    desktop: [topKnot1, topKnot2, topKnot3, topKnot4, topKnot5],
    phone: [topKnot1b, topKnot2b, topKnot3b, topKnot4b, topKnot5b],
  }),
  colorMyMusic: createImageSet({
    prefix: "sp",
    desktop: [spotify1, spotify2, spotify3, spotify4],
    phone: [spotify1b, spotify2b, spotify3b, spotify4b],
  }),
  casinoGames: createImageSet({
    prefix: "cg",
    desktop: [casino1, casino2, casino3, casino4, casino5],
    phone: [undefined, undefined, casino3b, undefined, undefined],
  }),
  puzzleQuest: createImageSet({
    prefix: "pq",
    desktop: [puzzle1, puzzle2, puzzle3, puzzle4, puzzle5],
    phone: [puzzle1b, puzzle2b, puzzle3b, puzzle4b, puzzle5b],
  }),
  partyGames: createImageSet({
    prefix: "ch",
    desktop: [charades1, charades2, charades3, charades4],
    phone: [charades1b, charades2b, charades3b, charades4b],
  }),
  castlesHearts: createImageSet({
    prefix: "c-h",
    desktop: [castlesHearts1, castlesHearts2, castlesHearts3, castlesHearts4, castlesHearts5],
    phone: [castlesHearts1b, castlesHearts2b, castlesHearts3b, castlesHearts4b, castlesHearts5b],
  }),
  karaokeNight: createImageSet({
    prefix: "kn",
    desktop: [karaokeNight1, karaokeNight2, karaokeNight3],
    phone: [undefined, undefined, undefined],
  }),
} as const;

export type ProjectImageSet = typeof imageSets[keyof typeof imageSets];
