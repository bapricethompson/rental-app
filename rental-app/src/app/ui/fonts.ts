import { Barlow } from "next/font/google";
import { PT_Serif } from "next/font/google";

const barlow = Barlow({ subsets: ["latin"], weight: "400" });
const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400"] });
export { barlow, ptSerif };