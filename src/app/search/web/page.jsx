import React from 'react'

async function Web({searchParams}) {

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  const results = data.items
  return (
    <>
      {
        results && results.map(result => (
          <h1 key={result.cacheId}>{result.title}</h1>
        ))
      }    
    </>
  )
}

export default Web