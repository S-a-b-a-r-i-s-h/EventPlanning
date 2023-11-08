import ExecomCard from "@/components/shared/ExecomCard";
import { execomCore, execomSquad } from "@/constants";
import React from "react";

const Execom = () => {
  return (
    <div>
      <div className="mt-10 flex w-[100vw] flex-wrap justify-center gap-9">
        {execomCore.map((item) => (
          <ExecomCard
            key={item.name}
            execomName={item.execomName}
            name={item.name}
            github={item.github}
            linkedin={item.linkedin}
            imgURL={item.imgURL}
          />
        ))}
      </div>
      <div className="mt-10 flex w-[100vw] basis-3 flex-wrap justify-center gap-9">
        {execomSquad.map((item) => (
          <ExecomCard
            key={item.name}
            execomName={item.execomName}
            name={item.name}
            github={item.github}
            linkedin={item.linkedin}
            imgURL={item.imgURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Execom;
