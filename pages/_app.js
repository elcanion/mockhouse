import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { Layout } from '../src/components/Layout'
import theme from '../src/theme'



function MyApp({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
{
  console.log('hehe')
}
    </>
  )
}

export default MyApp
