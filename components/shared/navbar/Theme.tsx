"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";
const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <div>
      <Menubar className="relative border-none bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="bg-transparent">
            {mode === "light" ? (
              <Image
                src="/assets/icons/sun.svg"
                alt="sun"
                width={20}
                height={20}
                className="bg-transparent focus:bg-transparent"
              />
            ) : (
              <Image
                src="/assets/icons/moon.svg"
                alt="moon"
                width={20}
                height={20}
                className="bg-transparent focus:bg-transparent"
              />
            )}
          </MenubarTrigger>
          <MenubarContent
            className="absolute right-[-3rem] z-[9999] mt-3 min-w-[120px]
            rounded border bg-white py-2 dark:border-dark-400 dark:bg-dark-300"
          >
            {themes.map((item) => (
              <MenubarItem
                key={item.value}
                className="flex items-center gap-4 px-2.5 py-2 hover:bg-slate-200 dark:focus:bg-dark-400"
                onClick={() => {
                  setMode(item.value);

                  if (item.value !== "system") {
                    localStorage.theme = item.value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.value}
                  width={16}
                  height={16}
                  className={`${mode === item.value && "violet-text"}`}
                />
                <p
                  className={`body-semibold 
                    ${
                      mode === item.value
                        ? "violet-text"
                        : "text-dark100_light900"
                    }`}
                >
                  {item.label}
                </p>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Theme;
