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
          <Image src="/assets/burger.svg" alt="menu" width={24} height={24} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Useful links</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="w-full flex flex-col gap-6 py-8 text-xl">
            {burgerLinks.map((link) => (
              <Link
                href={link.route}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="h-6 flex row gap-3">
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
