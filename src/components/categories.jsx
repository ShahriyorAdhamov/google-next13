"use client"

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const categories = ["All", "Images"];

function Categories() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get('searchTerm')
  const [categoryActive, setCategoryActive] = useState('All')

  const activeCategory = (category) => {
    setCategoryActive(category);
    router.push(`/search/${category === 'Images'? 'image': 'web'}?searchTerm=${searchTerm}`)
  }

  return (
      <ul className="flex">
      {
        categories.map((item) => (
          <li onClick={() => activeCategory(item)} key={item} className={'m-3 rounded-2xl' + (categoryActive === item?' active': '')}>
          <span className="p-2 hover:bg-slate-200 cursor-pointer rounded-2xl" >{item}</span>
        </li>
        ))
      }
      
    </ul>

  );
}

export default Categories;

