import { Flex, Icon, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import { FaFacebook, FaFacebookSquare, faFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

export const Footer = (props) => 
    <Flex 
    as="footer"
    mx={'auto'}
    py="10px"
    px="10px" 
    justifyContent={'flex-end'}
    alignItems={'center'}
    bgColor={useColorModeValue('white', 'black')}
    borderTopWidth={'1px'}
    borderTopColor={useColorModeValue('gray.200', 'gray.900')}
    >
        <Text 
        mr={'auto'} 
        color={useColorModeValue('black', 'white')}
        >
            Copyright 2021 SI Soluções Imobiliárias    
        </Text>
        <IconButton
            //onClick={onToggle}
            fontSize={'20px'}
            icon={
              <FaFacebookSquare />
              //isOpen ? <FaTimes 
              //        /> : <FaBars />
            }
            mx={3}
            variant={'ghost'}
            color={useColorModeValue('black', 'white')}
            borderColor={useColorModeValue('black', 'white')}
            borderWidth={'1px'}
            borderRadius={'none'}
            aria-label={'Enter facebook'}
        />
        <IconButton
            //onClick={onToggle}
            fontSize={'20px'}
            icon={
              <FaYoutubeSquare />
              //isOpen ? <FaTimes 
              //        /> : <FaBars />
            }
            mx={3}
            variant={'ghost'}
            color={useColorModeValue('black', 'white')}
            borderColor={useColorModeValue('black', 'white')}
            borderWidth={'1px'}
            borderRadius={'none'}
            aria-label={'Enter facebook'}
        />
        <IconButton
            //onClick={onToggle}
            fontSize={'20px'}
            icon={
              <FaInstagramSquare />
              //isOpen ? <FaTimes 
              //        /> : <FaBars />
            }
            mx={3}
            variant={'ghost'}
            color={useColorModeValue('black', 'white')}
            borderColor={useColorModeValue('black', 'white')}
            borderWidth={'1px'}
            borderRadius={'none'}
            aria-label={'Enter facebook'}
        />
    </Flex>
