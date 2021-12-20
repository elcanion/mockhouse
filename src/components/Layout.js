import { AdContainer } from './AdContainer'
import WithSubnavigation from './Navbar-dev'
import AdBanner from './AdBanner/AdBanner'
import { Footer } from './Footer/Footer'
import { Box, Button, Container, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FooterDev } from './Footer/Footer-dev'

export function Layout ({ children }) {
    return (
        <>
            <WithSubnavigation />
                <Box
                    backgroundColor={useColorModeValue('white', 'brand.dark.gray')}
                    >
                    { children }
                </Box>
                
            <FooterDev />
        </>
    )
}