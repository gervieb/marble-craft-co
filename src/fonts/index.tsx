import {
  Jost,
  Alex_Brush,
  Roboto,
  // Bodoni_Moda,
  Courgette,
} from "next/font/google";

export const jost = Jost({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-josh",
  fallback: ["Roboto"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

// export const bodoniModa = Bodoni_Moda({
//   subsets: ['latin'],
//   weight: '400',
// });

export const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
});

export const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
});
