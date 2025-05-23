import { Barlow } from "next/font/google";
import { PT_Serif } from "next/font/google";
import { Josefin_Sans } from "next/font/google"; // Import the font
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: "400" });

const barlow = Barlow({ subsets: ["latin"], weight: "400" });
const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400"] });
export { barlow, ptSerif,josefinSans };