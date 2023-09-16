"use client";

import { SignOutButton, SignedIn } from "@clerk/nextjs";
import "./LeftBar.scss";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";

function LeftBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="leftsidebar">
      <div>
        <div className="flex w-full flex-1 items-start max-lg:items-center flex-col gap-4">
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
                <p className="max-lg:hidden">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
          <button className="flex items-center bg-emerald-500 hover:bg-emerald-300 px-6 py-2 rounded-lg gap-1">
            <div className="flex cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={52}
                height={52}
              />
            </div>
            <p className="max-lg:hidden">Logout</p>
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}

export default LeftBar;
