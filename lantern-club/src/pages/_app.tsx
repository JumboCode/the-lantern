import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';


export default function App({ 
  Component, 
  pageProps: { session, ...pageProps } 
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
          <title>The Lantern</title>
          <link rel="icon" href="/images/blue-circle-logo.png" /> 
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

