import WebSearchResults from '@/components/webSearchResults';
import Link from 'next/link';
import React from 'react'

async function Web({searchParams}) {

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  const results = data.items

  if(!response.ok) {
    throw new Error('Something went wrong')
  }
  return (
    <>
      {
        results? <WebSearchResults results={data}/>: 
        <div>
          <h2>No results</h2>
          <button><Link href={'/'}>home</Link></button>
        </div>
      }    
    </>
  )
}

export default Web