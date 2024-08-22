import { JetBrains_Mono, Inter, Orbitron } from "next/font/google";

interface IFeature {
  title: string;
  description: string;
}

interface ITools extends IFeature {
  link: string;
}

export const orbitron = Orbitron({
  subsets: ["latin"],
});

export const jbMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const DISCORD_INVITE = "https://neplextech.com/discord";
export const DISCORD_ICON = "https://github.com/neplextech.png";
