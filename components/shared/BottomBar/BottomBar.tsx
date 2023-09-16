"use client";

import "./BottomBar.scss";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";

function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="bottom-bar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-emerald-500"}`}
            >
              <div className="h-6 ">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
              </div>
              <p
              // className="max-sm:hidden"
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BottomBar;
