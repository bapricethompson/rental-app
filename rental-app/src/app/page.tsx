"use client";
import GoButton from "./components/GoButton";
import OffsetImages from "./components/OffsetImages";
import { josefinSans } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="w-full">
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
            <div className="flex justify-start w-fit">
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
        <OffsetImages></OffsetImages>
      </div>
    </main>
  );
}
