import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'

function WebSearchResults({results}) {
  return (
    <div>
        <p>
            About {results.searchInformation?.formattedTotalResults} results({results.searchInformation?.formattedSearchTime} seconds)
        </p>
        {results.items?.map(result => (
            <div key={result.link} className='mb-8 max-w-xl'>
                <div className='group flex flex-col'>
                    <Link href={result.link} className='text-sm truncate'>{result.formattedUrl}</Link>
                    <Link className='text-blue-500 group-hover:underline decoration-blue-800 text-xl truncate font-medium' href={result.link}>{result.title}</Link>
                </div>
                <p className=''>
                    {Parser(result.htmlSnippet)}
                </p>
            </div>
        ))}
    </div>
  )
}

export default WebSearchResults