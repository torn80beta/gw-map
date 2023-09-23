import { utilLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function UtilLinks() {
  return (
    <div className="w-full flex flex-col gap-2 py-8 text-xl max-lg:items-center">
      {utilLinks.map((link) => (
        <Link
          href={link.route}
          key={link.label}
          rel="noopener noreferrer"
          target="_blank"
          className="leftsidebar_link gap-0"
        >
          <div className="h-6 flex row gap-3">
            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
            {<p className="max-lg:hidden">{link.label}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UtilLinks;
