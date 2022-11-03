import { useState, useEffect, useContext } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';

import { darkTheme, lightTheme } from '../themes';
import Cookie from 'js-cookie';
import UiProvider from '../context/ui/UiProvider';

function MyApp({ Component, pageProps }: AppProps) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme);


  useEffect(() => {

    const cookieTheme = Cookie.get('theme') || 'light';
    
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : darkTheme;

    setCurrentTheme(selectedTheme);
  }, []);
  

  return (
    <UiProvider>
    <ThemeProvider theme={ currentTheme }>
      <CssBaseLine />
      <Component {...pageProps} />
    </ThemeProvider>
    </UiProvider>
  )
}

export default MyApp
