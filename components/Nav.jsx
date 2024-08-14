"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="TollyGood Logo"
          width={30}
          height={30}
          className="object-contain"
        ></Image>
        <p className="logo_text">Tollygood</p>
      </Link>
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/reviews" className="outline_btn">
            Reviews
          </Link>
          <Link href="/news" className="outline_btn">
            News
          </Link>
          <Link href="/trending" className="black_btn">
            Trending
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
