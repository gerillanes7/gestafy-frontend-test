import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import ThemeSettings from "../src/theme/ThemeSettings";
import createEmotionCache from '../src/theme/createEmotionCache';
import RTL from "../src/theme/RTL";
import BlankLayout from '@/src/layouts/BlankLayout';
import FullLayout from '@/src/layouts/FullLayout';
import { wrapper } from '@/src/redux/store';
import { useSelector } from 'react-redux'
import "../styles/style.scss";

const clientSideEmotionCache = createEmotionCache();

const layouts = {
  Blank: BlankLayout,
};


const App = (props) => {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const customizer = useSelector((state) => state.customizer);
  const auth = useSelector((state) => state.authentication)

  console.log(auth);
  const Gettheme = ThemeSettings();
  const Layout = layouts[Component.layout] || FullLayout;

  return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={Gettheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <RTL direction={customizer.activeDir}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RTL>
        </ThemeProvider>
      </CacheProvider>
  )
}

export default wrapper.withRedux(App)