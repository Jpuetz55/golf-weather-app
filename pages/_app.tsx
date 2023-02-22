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

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);

// function MyApp({ Component, pageProps}) {
//   return (
//     <>
//     <Navbar/>
//     <Component {...pageProps} />
//     </>
    
    
//   )
// }

// export default MyApp