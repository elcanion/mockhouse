import { Flex, useColorModeValue } from '@chakra-ui/react'

export const Footer = (props) => <Flex as="footer" py="9" 
                bgColor={useColorModeValue('white', 'black')} {...props} />
