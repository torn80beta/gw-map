import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { burgerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function BurgerMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Useful links</SheetTitle>
            <SheetDescription>
              {/* This action cannot be undone. This will permanently delete your
              account and remove your data from our servers. */}
            </SheetDescription>
          </SheetHeader>
          <div className="w-full flex flex-col gap-6 py-8 text-xl">
            {burgerLinks.map((link) => (
              <Link
                href={link.route}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="h-6 flex row  gap-3">
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    width={24}
                    height={24}
                  />
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BurgerMenu;
