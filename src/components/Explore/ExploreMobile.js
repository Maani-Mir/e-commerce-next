import React from "react";
import Explore1 from "../../../public/explore-1.png";
import Explore2 from "../../../public/explore-2.png";
import Explore3 from "../../../public/explore-3.png";
import Explore5 from "../../../public/explore-5.png";
import Explore6 from "../../../public/explore-6.png";
import Image from "next/image";

export default function ExploreMobile() {
  return (
    <>
      <div className="mt-12">
        <div className="flex justify-between">
          <div>
            <p className="text-3xl -tracking-widest font-sans">EXPLORE MENU</p>
            <div className="border-[#EA002A] border-b-4 w-20 ml-0.5 pt-0.5"></div>
          </div>
          <div>
            <p className=" font-bold">VIEW ALL</p>
          </div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-1">
        <div className="row-span-2 border-dashed border-2 rounded-lg">
          <p className="pl-2">Ramadan Offers</p>
          <div className="mt-16 flex items-center justify-center">
            <Image src={Explore1} alt="explore-1" width={200} className="" />
          </div>
        </div>
        <div className="border-dashed border-2 rounded-lg">
          <p className="pl-2">Everyday Value</p>
          <div className="flex items-center justify-center">
            <Image src={Explore2} alt="explore-1" width={200} className="" />
          </div>
        </div>
        <div className="border-dashed border-2 rounded-lg">
          <p className="pl-2">Ala-Carte-&-Combos</p>
          <div className="flex items-center justify-center">
            <Image src={Explore3} alt="explore-1" width={200} className="" />
          </div>
        </div>
        <div className="border-dashed border-2 rounded-lg">
          <p className="pl-2">Signature-Boxes</p>
          <div className="flex items-center justify-center">
            <Image src={Explore5} alt="explore-1" width={200} className="" />
          </div>
        </div>{" "}
        <div className="border-dashed border-2 rounded-lg">
          <p className="pl-2">Sharing</p>
          <div className="flex items-center justify-center">
            <Image src={Explore6} alt="explore-1" width={200} className="" />
          </div>
        </div>
      </div>
    </>
  );
}
