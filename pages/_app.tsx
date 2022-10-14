import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';

import { darkTheme } from '../themes';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseLine />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
