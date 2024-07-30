"use client";
import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
function SideBar() {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link, index) => {
          let isActive =
            pathname === link.rout || pathname.startsWith(link.rout);
          return (
            <Link
              href={link.rout}
              key={index}
              className={cn(
                "flex items-center gap-4 p-4 rounded-md",
                isActive ? "bg-blue-1" : ""
              )}
            >
              <Image
                src={link.imageUrl}
                alt={link.lable}
                width={24}
                height={24}
              />
              <p className={"text-lg font-semibold max-lg:hidden"}>
                {link.lable}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default SideBar;
