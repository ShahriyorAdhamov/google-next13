'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Categories from "./categories";

function SearchHeader({params}) {
  const [searchValue, setSearchValue] = useState(params)
  return (
    <header>
      <div className="flex flex-row">
        <Link href="/" className="flex align-middle h-14 pt-5">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
            width="120"
            height="40"
            alt="image"
          />
        </Link>
        <form
          className="flex w-full m-5 max-w-[90%]
        border border-gray-200 px-5 py-3 rounded-full hover:shadow-md sm:max-w-xl lg:max-w-2xl"
        >
          <input
            className="flex-grow px-5 focus: outline-none"
            type="search"
            placeholder="search..."
            value={searchValue}
          />
          <FaMicrophone />
          <IoMdSearch />
        </form>
      </div>
      <Categories/>
    </header>
  );
}

export default SearchHeader;
