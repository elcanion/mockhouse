import { Flex, Button, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'
import { AccessibilityMenu, MobileAccessibilityMenu } from './AccessibilityMenu';

export const Navbar = () => {
  const [display, changeDisplay] = useState('none')

  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="início" my={5} mx={10} w="100%">
              Início - Desktop
            </Button>
          </NextLink> 
        </Flex>
        <IconButton aria-label='Open Menu' size='lg' mr={2} icon={<HamburgerIcon />} display={['flex', 'flex', 'none', 'none']} onClick={() => changeDisplay('flex')}/>
        <AccessibilityMenu />
      </Flex>
      
      <Flex w='100vw' bgColor='gray.900' zIndex={20} h='100vh' pos='fixed' top='0' left='0' overflowY='auto' flexDir='column' display={display}>       
        <Flex justify='flex-end'>
          <IconButton mt={2} mr={2} aria-label='Close Menu' size='lg' icon={<CloseIcon />} onClick={() => changeDisplay('none')}/>
        </Flex>
        
        <Flex flexDir='column' align='center'>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="início" my={5} w="100%">
              Início - Mobile
            </Button>
          </NextLink>   
        </Flex>    
      </Flex>
    </Flex>
  )
}
