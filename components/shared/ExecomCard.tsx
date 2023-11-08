import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ExecomCardProps {
  execomName: string;
  name: string;
  github: string;
  linkedin: string;
  imgURL: string;
}

const ExecomCard = ({
  execomName,
  name,
  github,
  linkedin,
  imgURL,
}: ExecomCardProps) => {
  return (
    <div>
      <div className="relative">
        <div
          className={`absolute -inset-1 m-1 rounded-lg bg-gradient-to-r  from-violet-700 to-indigo-500 blur`}
        ></div>
        <div
          className={`background-light800_dark200 relative mx-auto flex h-[350px] w-[350px]
            flex-1 flex-col items-center rounded-[10px] py-5 pb-0 max-sm:w-[90vw] sm:min-h-[350px] sm:w-[350px] sm:min-w-[350px]`}
        >
          {/* indigo-400 cyan-400 */}
          <h2 className=" mb-3 break-words bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-2xl font-semibold text-transparent">
            {execomName}
          </h2>
          <div
            className={`relative flex h-[150px] w-[150px] justify-center rounded-full bg-gradient-to-r`}
          >
            <Image
              alt="photo"
              src={imgURL}
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="mt-5 bg-gradient-to-r from-violet-700 to-indigo-500 bg-clip-text text-3xl font-bold leading-normal text-transparent">
            {name}
          </h3>
          <div className="px-5 w-full h-10 mt-7 flex justify-between items-center">
            <Link
              href={linkedin}
              className="text-blue-500"
            > 
              LinkedIn
            </Link>
            <Link
              href={github}
              className="text-gray-500"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecomCard;
