import { Box, chakra, ChakraProvider, ColorModeProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { Layout } from '../src/components/Layout'
import theme from '../src/theme'



function MyApp({ Component, pageProps, cookies }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
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


export default MyApp
