import { Box, ChakraProvider, ColorModeProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { Layout } from '../src/components/Layout'
import theme from '../src/theme'



function MyApp({ Component, pageProps, cookies }) {
  const colorModeManager = cookies === 'string'
                          ? cookieStorageManager(cookies)
                          : localStorageManager

  return (
    <>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          //useSystemColorMode: true,
        }}
        
      >
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ColorModeProvider>
    </ChakraProvider>
    </>
  )
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    }
  }
}

export default MyApp
