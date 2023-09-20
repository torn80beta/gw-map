import Link from "next/link";
import "./TopBar.scss";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

async function TopBar() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="topBar">
      <Link href={"/"}>
        <Image
          src={"/assets/logo2.png"}
          alt={"logo"}
          width={48}
          height={48}
          priority={true}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Link>
      <div className="flex items-center gap-1">
        <SignedIn>
          <h4>{user.username}</h4>
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
