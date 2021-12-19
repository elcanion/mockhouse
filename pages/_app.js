import { Box, chakra, ChakraProvider, ColorModeProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import { Layout } from '../src/components/Layout'
import theme from '../src/theme'



function MyApp({ Component, pageProps, cookies }) {

  return (
    <>
    <ChakraProvider resetCSS theme={theme} >
      <ThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          //useSystemColorMode: true,
        }}
        
      >
        
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
    </>
  )
}


export default MyApp
