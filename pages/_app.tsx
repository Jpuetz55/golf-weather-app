import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import '../components/Calendar.css'

import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps}) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
    
    
  )
}

export default MyApp