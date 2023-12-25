import Image from 'next/image'
import React from 'react'
import SearchPanel from './search-panel'

function Main() {
  return (
    <main>
        <Image 
            src='' 
            width={300} 
            height={100} 
            alt='logo-image'
        />
        <SearchPanel/>
    </main>
  )
}

export default Main