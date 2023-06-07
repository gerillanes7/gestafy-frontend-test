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
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { authUser } from '@/src/redux/actions/authenticationActions';
import useSnackbar from '@/src/hooks/useSnackbar';
import Snackbar from '@/src/components/global/Snackbar';
import "../styles/style.scss";

const clientSideEmotionCache = createEmotionCache();

const layouts = {
  Blank: BlankLayout,
};


const App = (props) => {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const customizer = useSelector((state) => state.customizer);
  const { snackbar } = useSnackbar()
  const Gettheme = ThemeSettings();
  const Layout = layouts[Component.layout] || FullLayout;
  const dispatch = useDispatch()


  const checkIfHasToken = () => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      dispatch(authUser())
    }

  }

  React.useEffect(() => {
    checkIfHasToken()
  }, [])

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
            <Snackbar
              message={snackbar?.message}
              open={snackbar?.show || false}
              severity={snackbar?.type}
            />
          </Layout>
        </RTL>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default wrapper.withRedux(App)