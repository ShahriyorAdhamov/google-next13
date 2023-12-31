import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function SearchHeader() {
  return (
    <header>
      <div className="flex flex-row">
        <Link href="/" className="flex align-middle h-14 pt-5">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
            width="120"
            height="40"
          ></Image>
        </Link>
        <form
          className="flex w-full m-5 max-w-[90%]
        border border-gray-200 px-5 py-3 rounded-full hover:shadow-md sm:max-w-xl lg:max-w-2xl"
        >
          <input
            className="flex-grow px-5 focus: outline-none"
            type="search"
            placeholder="search..."
          />
          <FaMicrophone />
          <IoMdSearch />
        </form>
      </div>
    </header>
  );
}

export default SearchHeader;
