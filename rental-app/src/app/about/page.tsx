"use client";
import { josefinSans } from "@/app/ui/fonts";
import Image from "next/image";
import paddle from "../img/paddleboard.png";
import GoButton from "../components/GoButton";

const About = () => {
  return (
    <div>
      <div className="flex w-[80%] mx-auto justify-between items-center my-[30px]">
        <div>
          <h1 className={`${josefinSans} text-5xl text-left`}>
            Experience More. Pay Less.
          </h1>

          <p className={`${josefinSans} text-md text-left my-[20px] w-[80%]`}>
            We are on a mission to help people experience more without paying
            more.
          </p>
          <p className={`${josefinSans} text-md text-left my-[20px] w-[80%]`}>
            Our platform connects outdoor lovers with affordable recreational
            gear—from kayaks and paddleboards to tents, skis, and more. Whether
            you are planning a spontaneous weekend getaway or your next big
            trip, we make it easy to find the gear you need—without the high
            price tag or the hassle.
          </p>
          <GoButton
            href="/listings"
            onClick={() => {
              console.log("hi");
            }}
            className="ml-0"
          >
            See Items
          </GoButton>
        </div>
        <Image
          src={paddle}
          alt="Surfing"
          height={786}
          width={614}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="w-full bg-lightGrey">
        <div className="flex justify-between items-center w-[80%] mx-auto my-[30px] py-[50px]">
          <Image
            src={paddle}
            alt="Surfing"
            height={450}
            width={350}
            className="rounded-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Why We Exist</h2>
            <p className="text-lg mb-6">
              We believe that adventure should be accessible to everyone.
            </p>
            <ul className="space-y-4 list-disc pl-8">
              <li>
                <strong>Experience More:</strong> Say yes to new activities
                without committing to expensive gear.
              </li>
              <li>
                <strong>Pay Less:</strong> Rent what you need, only when you
                need it.
              </li>
              <li>
                <strong>Travel Light:</strong> Pick up gear near your
                destination—no hauling required.
              </li>
              <li>
                <strong>Support Locals:</strong> Rentals come from individuals
                and small businesses in your community.
              </li>
              <li>
                <strong>Reduce Waste:</strong> Sharing gear means less stuff
                collecting dust—and fewer one-time purchases.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[80%]  flex justify-between items-center mx-auto my-[40px] ">
        <div>
          <h3 className="text-3xl font-bold mb-4">Got Gear? List It!</h3>
          <p className={`${josefinSans} text-md text-left my-[20px] w-[80%]`}>
            Have outdoor gear you are not using every day? You can earn extra
            income by renting it out on our platform. Whether it is a
            paddleboard, tent, or hiking pack, your gear could help someone else
            enjoy their next adventure—and put money back in your pocket.
          </p>
          <p className={`${josefinSans} text-md text-left my-[20px] w-[80%]`}>
            We make it easy to list, price, and manage your rentals with
            built-in protections and support every step of the way.
          </p>
          <p className={`${josefinSans} text-md text-left my-[20px] w-[80%]`}>
            Join our growing community of adventurers and gear sharers.
            Together, we are making the outdoors more affordable, more
            accessible, and more sustainable—for everyone.
          </p>
        </div>
        <Image
          src={paddle}
          alt="Surfing"
          height={450}
          width={350}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default About;
