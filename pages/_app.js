import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
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
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
{
  console.log('hehe')
}
    </>
  )
}

export default MyApp
