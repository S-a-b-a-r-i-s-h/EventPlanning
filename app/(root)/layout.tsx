import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100">
      <Navbar />
      <div className="flex">
        <section className="flex min-h-screen pb-6 pt-36 max-md:pb-14 ">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
