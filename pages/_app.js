import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
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
        
        <Box
            overflowY='auto'
            sx={{
                '&::-webkit-scrollbar': {
                    width: '16px',
                    borderRadius: '8px',
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-track': {
                    width: '20px',
                    background: '#000'
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#000',
                    borderRadius: '24px',
                }
            }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
    </>
  )
}

export default MyApp
