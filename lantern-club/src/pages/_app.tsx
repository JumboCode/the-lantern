import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps } 
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
          <title>The Lantern</title>
          {/* <link rel="icon" href="/images/blue-circle-logo.png" /> this is causing an issue where logos on pages either not show or different size */}
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

