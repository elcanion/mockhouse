import { AdContainer } from './AdContainer'
import WithSubnavigation from './Navbar-dev'
import AdBanner from './AdBanner/AdBanner'
import { Footer } from './Footer'
import { Box, Button, Container } from '@chakra-ui/react'
import Link from 'next/link'

export function Layout ({ children }) {
    return (
        <>
            <WithSubnavigation />
                { children }
            <Footer />
        </>
    )
}