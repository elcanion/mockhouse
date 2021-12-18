import { Flex, useColorMode } from '@chakra-ui/react'

export const AdContainer = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'brand.light.white', dark: 'brand.dark.gray' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
