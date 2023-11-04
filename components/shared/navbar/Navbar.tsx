import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import { sidebarLinks } from "@/constants";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200
        fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12"
    >
      <Link href="/" className="flex flex-col items-start max-lg:hidden">
        <p
          className="h1-bold mb-0 font-spaceGrotesk
            text-dark-100 dark:text-light-900"
        >
          Tinker
          <span className="violet-text">Hub</span>
        </p>
        <span className=" violet-text mt-0 font-bold">CEPerumon</span>
      </Link>
      <Link href="/" className="h1-bold violet-text hidden max-lg:flex">
        CEP
      </Link>
      <div className="flex-between gap-20 max-lg:hidden">
        {sidebarLinks.map((link) => (
          <Link
            href={link.route}
            key={link.label}
            className="hover:violet-text text-dark400_light700 text-lg"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex-between gap-5">
      <Theme />
      <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
