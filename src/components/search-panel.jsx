'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

function SearchPanel() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim()) {
      router.push(`/search/web?searchTerm=${inputValue}`)
    }
  }

  const randomSearch = async () => {
    const res = await fetch('https://random-word-api.herokuapp.com/word')
      .then(res => res.json())
      .then(data => data[0])
    if(res) {
      router.push(`/search/web?searchTerm=${res}`)
    }
  }
  return (
    <>
        <form onSubmit={handleSubmit} className='flex w-full m-5 mx-auto max-w-[90%]
        border border-gray-200 px-5 py-3 rounded-full hover:shadow-md sm:max-w-xl lg:max-w-2xl'>
            <IoMdSearch/>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} className='flex-grow px-5 focus: outline-none' type='text' placeholder='search...'/>
            <FaMicrophone/>
        </form>
        <div className='flex flex-col space-y-2 small:space-y-0 sm:flex-row justify-center space-x-5'>
          <button className='btn' onClick={handleSubmit}>Google Search</button>
          <button className='btn' onClick={randomSearch}>I am feeling Lucky</button>
        </div>   
    </>
  )
}

export default SearchPanel