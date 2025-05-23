"use client";
import Image from "next/image";
import kayak from "./img/kayak.png";
import ski from "./img/ski.png";
import surf from "./img/surfer.png";
import back from "./img/backpacking.png";
import GoButton from "./components/GoButton";
import { josefinSans } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="w-full text-center">
      <div className="flex mx-auto items-center  my-[30px]">
        <div className="w-[52%]">
          <div className="w-[85%] mx-auto">
            {" "}
            <h1 className={`${josefinSans} text-6xl text-left`}>
              Affordable Gear,
            </h1>
            <h2 className={`${josefinSans} text-6xl text-left`}>
              Limitless Adventures
            </h2>
            <p className={`${josefinSans} text-md text-left my-[20px] w-[80%]`}>
              Adventure brings us together—in wild places, on shared paths, and
              with gear passed from one explorer to the next. It reminds us we
              don’t need to own everything to experience everything. The
              outdoors belong to all of us.
            </p>
            <div>
              <GoButton
                type=""
                href="/listings"
                onClick={() => {
                  console.log("hi");
                }}
              >
                Browse Gear
              </GoButton>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-[38%]">
          <div className="flex space-between gap-[30px]">
            <Image
              src={ski}
              alt="Kayaking"
              height={344}
              width={273}
              className=""
            />
            <Image src={surf} alt="Kayaking" height={344} width={273} />
          </div>
          <div className="flex space-between gap-[5%] mt-[30px] ">
            <Image
              src={kayak}
              alt="Kayaking"
              height={344}
              width={273}
              className=""
            />
            <Image src={back} alt="Kayaking" height={344} width={273} />
          </div>
        </div>
      </div>
    </main>
  );
}
