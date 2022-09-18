import 'raf/polyfill'

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

import { Provider } from 'app/provider';
import Head from 'next/head';
import React, {useState} from 'react';
import type { SolitoAppProps } from 'solito';
import Layout from '../components/layout';
import { UserContext } from '../lib/UserContext';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [user, setUser] = useState({name: "example"});

  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
      <UserContext.Provider value={[user, setUser]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </UserContext.Provider>
      </Provider>
    </>
  )
}

export default MyApp
