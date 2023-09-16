"use client";

import Link from "next/link";
import "./TopBar.scss";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

function TopBar() {
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
          <UserButton
            appearance={{
              elements: { userButtonPopoverFooter: "hidden" },
            }}
          />
        </SignedIn>
      </div>
    </div>
  );
}

export default TopBar;
