'use client'

import { useEffect } from "react";

import React from 'react'

function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error])
  return (
    <div>
        <h2>Error</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error