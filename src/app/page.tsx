import Image from "next/image";
import HeroImage from "./assets/Bitmap.svg";

export default function Home() {
  return (
    <main className=" flex flex-col-reverse lg:flex-row lg:px-[165px] lg:py-[177px] lg:items-center lg:justify-center px-6 py-[88px]">
      <div className="border  lg:w-4/5 border-[#1B1937] rounded-b-lg bg-[#1B1937] lg:pl-[72px] lg:pr-[124.5px] lg:py-[71px] flex flex-col gap-10 lg:gap-[72px] pr-8 pb-8 pl-[31px] text-center lg:text-left">
        <div className="flex flex-col gap-4 lg:gap-[25px]">
          <p className="text-[28px] lg:text-4xl font-bold pt-10">
            Get <span className="text-[#AB5CDB] ">insights</span> that
            help your business grow.
          </p>
          <p className="text-[#FFF]/[0.75] text-[15px] font-normal">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <span className="flex flex-col lg:flex-row gap-6 lg:gap-16">
          <span>
            <p className="text-2xl font-bold">10k+</p>
            <p className="text-[#FFF]/[0.75] text-xs font-normal">Companies</p>
          </span>
          <span>
            <p className="text-2xl font-bold">314</p>
            <p className="text-[#FFF]/[0.75] text-xs font-normal">Templates</p>
          </span>
          <span>
            <p className="text-2xl font-bold">12M+</p>
            <p className="text-[#FFF]/[0.75] text-xs font-normal">Queries</p>
          </span>
        </span>
      </div>
      <div className="relative border border-[#1B1937] rounded-t-lg">
        <Image
          src={HeroImage}
          alt="image"
          className="border border-[#1B1937] rounded-t-lg"
        />
        <div className="absolute top-0 z-10 w-full h-full bg-[#AB5CDB]/[.7511]"></div>
      </div>
    </main>
  );
}
