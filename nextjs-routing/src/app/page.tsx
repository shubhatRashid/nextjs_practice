import React from 'react'
import Link from 'next/link'
const Homepage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href='/products'>Products</Link>
    </div>
  )
}

export default Homepage