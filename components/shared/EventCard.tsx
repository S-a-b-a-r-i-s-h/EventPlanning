// import Image from "next/image";
// import Link from "next/link";
import React from "react";

interface EventCardProps {
  segment: string;
  title: string;
  date: string;
  description: string;
  venue: string;
  time: string;
}
const EventCard = ({
  segment,
  title,
  date,
  description,
  venue,
  time,
}: EventCardProps) => {
  return (
    <div className="flex">
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
              {title}
            </h2>

            <p className="text-slate-600 font-bold leading-normal">{date}</p>

            <p className="w-[80%] m-5 dark:text-slate-300 text-slate-600">
              {description}
            </p>

            <div className="px-5 w-full h-10 mt-7 flex justify-between items-center">
              <p className="max-w-[50%] text-orange-400">@ {venue} </p>
              <p className=" text-amber-900"> {time} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
