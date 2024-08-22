import Image from "next/image";
import React from "react";

interface CardProperties {
    name: string;
    title: string;
    content: string;
    subcontent: string;
    image: string;
    nameClass: string;
    titleClass: string;
    contentClass: string;
    subcontentClass: string;
  }
const card: React.FC<CardProperties> = ({
    name,
    title,
    content,
    subcontent, image,
    nameClass,
    titleClass,
    contentClass,
    subcontentClass
  }) =>  {
    
  return (
    <div className="flex flex-col gap-4 shadow-[40px_60px_50px_-47px_rgba(72, 85, 106, 0.25)]">
      <div className="flex gap-[17px] lg:gap-4">
      <Image src={image} alt="image" width={28} height={28}/>
        <span className="flex flex-col gap-0 justify-center">
          <p className={`xl:text-[13px] xl:font-medium ${nameClass}`}>{name}</p>
          <p className={`xl:text-[11px] xl:font-medium ${titleClass}`}>{title}</p>
        </span>
      </div>
      <div className={`text-xl font-semibold ${contentClass}`}>{content}</div>
      <div className={`xl:text-[13px] xl:font-medium ${subcontentClass}`}>{subcontent}</div>
    </div>
  );
}

export default card;
