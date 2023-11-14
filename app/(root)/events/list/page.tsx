import EventCard from "@/components/shared/EventCard";
import { eventsCard } from "@/constants";
import Link from "next/link";
import React from "react";

const List = () => {
  return (
    <div className="w-[100vw]">
      <ul className="flex gap-6 justify-around flex-wrap">
        {eventsCard.map((item) => {
          return (
            <li  key={item.title} className="">
              <Link href={`/events/${item.segment}`}>
                <EventCard 
                  segment={item.segment}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  venue={item.venue}
                  time={item.time}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
