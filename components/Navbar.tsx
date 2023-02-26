import Link from 'next/link'
import React from 'react'

export default function Navbar() {

  
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>Golf Weather</a>
      </h1>
      <li>
            <Link href='/authenticate'>Sign in</Link>            
        </li>  
      <ul className='main-nav' />
          
    </nav>
  )
}
