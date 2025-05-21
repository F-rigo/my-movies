import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'
import Layout from '../components/Layout'
import theme from '../styles/theme'
import GlobalStyles from '../styles/global'
function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CinePocket</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A simple project to work with TypeScript, React, NextJS and Styled Components" />
      </Head>
      <GlobalStyles />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
