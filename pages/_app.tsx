import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import type { AppProps } from 'next/app'
import React from 'react'
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
 
  
}

export default App;

// function MyApp({ Component, pageProps}) {
//   return (
//     <>
//     <Navbar/>
//     <Component {...pageProps} />
//     </>
    
    
//   )
// }

// export default MyApp