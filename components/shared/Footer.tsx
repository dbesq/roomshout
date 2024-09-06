import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
          <Image
            src="/assets/images/LogoDesign.png"
            alt="logo"
            width={64}
            height={19}
          />
        </Link>

        <p>2024 RoomShout, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
