import headshot1 from "@/assets/headshots/headshot.jpeg";
import headshot2 from "@/assets/headshots/tracy-headshot.jpg";
import headshot3 from "@/assets/headshots/headshot2.png";

type BioQuote = {
  id: number;
  quote: string;
  image: string;
  author?: string;
};

export const bioQuotes: BioQuote[] = [
  {
    id: 1,
    quote: "I’m drawn to complex systems—and even more to making them feel simple, human, and useful.",
    image: headshot1,
  },
  {
    id: 2,
    quote: "I think in end-to-end experiences: how people arrive, what they need, and how the product supports real decisions.",
    image: headshot2,
  },
  {
    id: 3,
    quote: "I bring analytical rigor to engineering—and a deep respect for the people on the other side of the screen",
    image: headshot3,
  },
  {
    id: 4,
    quote: "I’m motivated by products that make meaningful resources more accessible—and easier to use well.",
    image: headshot2,
  },
  {
    id: 5,
    quote: "My best work happens at the intersection of engineering, design, and real human needs.",
    image: headshot1,
  }
];

export default bioQuotes;
