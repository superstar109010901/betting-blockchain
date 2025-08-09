'use client'

import React from "react"
import BlueButton from "../buttons/blue";
import Image from "next/image";

interface TypeThreeProps {
  badge: string,
  views: string,
  user: string,
  image: string; // image URL from /public
}

const TypeThree: React.FC<TypeThreeProps> = ({user,badge, image,views }) => {
    const badgeColor = badge === "HOT" ? "bg-[#ED1D49]": badge === "NEW" ? "bg-[#1BB83D]" : "bg-[#FFAB00]";
  return (
    <>
              <div className="overflow-hidden">
                <div className="relative">
                  <Image
                    src={image}
                    alt="image"
                    className="w-full object-cover rounded-lg"
                  />
                  <div className="flex items-center mt-2">
                    <Image src={"/icons/" + user + ".svg"} className="w-4 h-4" alt="user" />
                    <span className="text-white text-[14px]">{views}</span>
                  </div>
                  <div className={"absolute top-2 left-2 text-white text-xs text-bold px-2 py-1 rounded-full " + badgeColor}>{badge}</div>
                </div>
              </div>
            </>
  )
}

export default TypeThree;