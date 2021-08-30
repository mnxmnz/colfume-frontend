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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <title>colfume</title>
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/image.png" />
        <meta property="og:title" content="Colfume :: 색으로 찾는 나만의 향기" />
        <meta property="og:url" content="https://www.colfume.co.kr" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1VLDXK4J7L');`,
          }}
        />
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
