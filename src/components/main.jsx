import Image from 'next/image'
import React from 'react'
import SearchPanel from './search-panel'

function Main() {
  return (
    <main>
      <div className='flex justify-center'>
        <Image 
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png' 
              width={300} 
              height={50} 
              alt='logo-image'
          />
      </div>
        <SearchPanel/>
    </main>
  )
}

export default Main