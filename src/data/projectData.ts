import type { Project } from "../components/ProjectSection";

export const projects: Project[] = [
  {
    id: "1",
    name: "Top Knot Holistics",
    role: "design, front-end, back-end",
    summary: "a website",
    description: "KB Massage / Top Knot Holistics: A single-page, mobile-responsive site for a massage therapy practice. I designed the service cards and content to emphasize quality, healing, and a personalized experience, then implemented the site using React and Tailwind CSS and deployed it on Vercel. The site includes a detailed services section, practitioner bio, and integrated booking via Google Calendar, so clients can choose an appointment time directly through Google’s scheduling interface.",
    liveUrl: "https://kb-massage.vercel.app/",
    githubUrl: "",
    images: [
      { src: "src/assets/top-knot-1.png", alt: "tk-1" },
      { src: "/src/assets/top-knot-2.png", alt: "tk-2" },
      { src: "/src/assets/top-knot-3.png", alt: "tk-3" },
      { src: "/src/assets/top-knot-4.png", alt: "tk-4" },
            { src: "/src/assets/top-knot-5.png", alt: "tk-5" },
      { src: "/src/assets/top-knot-6.png", alt: "tk-6" },
      { src: "/src/assets/top-knot-7.png", alt: "tk-7" },

    ],
  },
  {
    id: "2",
    name: "Casino Games",
    role: "design, front-end, back-end",
    summary: "a website",
    description: "this site does a lot",
    liveUrl: "https://casino-games-sooty.vercel.app/",
    githubUrl: "",
    images: [
      { src: "src/assets/casino-games-1.png", alt: "cg-1" },
      { src: "/src/assets/casino-games-2.png", alt: "cg-2" },
      { src: "/src/assets/casino-games-3.png", alt: "cg-3" },
      { src: "/src/assets/casino-games-4.png", alt: "cg-4" },
            { src: "/src/assets/casino-games-5.png", alt: "cg-5" },
      { src: "/src/assets/casino-games-6.png", alt: "cg-6" },

            { src: "/src/assets/casino-games-7.png", alt: "cg-7" },
    ],
  },
];

//  id: string;
//   name: string;
//   role?: string;
//   techStack?: string;
//   summary: string;
//   description: string;
//   liveUrl: string;
//   githubUrl: string;
//   images: CarouselImage[];
