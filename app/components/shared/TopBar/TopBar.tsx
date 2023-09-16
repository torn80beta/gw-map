"use client";

import Link from "next/link";
import "./TopBar.scss";
import Image from "next/image";
import { SignOutButton, SignedIn, OrganizationSwitcher } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function TopBar() {
  const router = useRouter();

  return (
    <div className="topBar">
      <Link href={"/"}>
        <Image
          src={"/assets/logo2.png"}
          alt={"logo"}
          width={48}
          height={"48"}
        />
      </Link>
      <div className="flex items-center gap-1">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <button className="flex bg-emerald-500 hover:bg-emerald-400 px-6 py-2 rounded-lg gap-1">
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                  style={{
                    filter:
                      "invert(100%) sepia(100%) saturate(2000%) hue-rotate(180deg)",
                  }}
                />
              </div>
              <p className="max-lg:hidden">Logout</p>
            </button>
          </SignOutButton>
        </SignedIn>

        <OrganizationSwitcher
          appearance={{
            elements: { organizationSwitcherTrigger: "py-2 px-4" },
          }}
        />
      </div>
    </div>
  );
}

export default TopBar;
