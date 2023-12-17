import React from 'react'
import Link from 'next/link'
import {TbGridDots} from 'react-icons/tb'

function Header() {
  return (
    <header className='flex justify-end p-5'>
        <div className='flex space-x-4'>
            <Link href='https://mail.google.com'>Google</Link>
            <Link  href='https://image.google.com'>Images</Link>
            <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl'/>
            <button className='bg-blue-500 text-white rounded-md font-medium hover:brightness-105 p-2'>Sign in</button>
        </div>
    </header>
  )
}

export default Header