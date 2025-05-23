import Image from "next/image";
import kayak from "../img/kayak.png";
import ski from "../img/ski.png";
import surf from "../img/surfer.png";
import back from "../img/backpacking.png";
const OffsetImages = () => {
  return (
    <div className="w-[38%] mx-auto">
      <div className="flex justify-between gap-4">
        <Image
          src={ski}
          alt="Skiing"
          height={344}
          width={273}
          className="rounded-lg object-cover"
        />
        <Image
          src={surf}
          alt="Surfing"
          height={344}
          width={273}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        <Image
          src={kayak}
          alt="Kayaking"
          height={344}
          width={273}
          className="rounded-lg object-cover"
        />
        <Image
          src={back}
          alt="Backpacking"
          height={344}
          width={273}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default OffsetImages;