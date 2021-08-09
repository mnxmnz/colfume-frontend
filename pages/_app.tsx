import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-style';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { client } from '../lib/api';
import { Header } from '../components/index';

function App({ Component, pageProps }: AppProps) {
  const fetcher = (url: string) => client.get(url);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>colfume</title>
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ fetcher }}>
          <RecoilRoot>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
          </RecoilRoot>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default App;
