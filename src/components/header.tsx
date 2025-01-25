import React from "react";
import { Image } from "@nextui-org/react";
import { Link } from "@/i18n/routing";

function Header() {
  return (
    <>
      <header className="fixed z-[50] top-0 left-0 w-full">
        <div className="backdrop-blur">
          <div className="container max-w-5xl px-3 sm:!px-8 py-2">
            <Link href="/" aria-label="site home link" className="block w-fit">
              <Image
                alt="StreamKit Portal Icon"
                src="/wp-content/streamkitportal/icon-3d.png"
                className="w-10"
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
