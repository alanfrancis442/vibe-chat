import React from "react";
import NaveBar from "@/components/navebar";
import SideBar from "@/components/SideBar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <NaveBar />
      <div>
        <SideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-mb:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}

export default HomeLayout;
