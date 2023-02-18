import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import '../components/Calendar.css'
import { SessionProvider, useSession } from "next-auth/react";

import type { AppProps } from 'next/app'
import React from 'react'
import { Session } from 'inspector';

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
    <Navbar/>
    <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp