"use client";

import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import "./LeftBar.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

function LeftBar() {
  const router = useRouter();

  return (
    <div className="leftsidebar">
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
          <button className="flex items-center bg-emerald-500 hover:bg-emerald-400 px-6 py-2 rounded-lg gap-1">
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
