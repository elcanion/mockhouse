import { AdContainer } from './AdContainer'
import WithSubnavigation from './Navbar-dev-2'
import AdBanner from './AdBanner/AdBanner'
import { Footer } from './Footer/Footer'
import { Box, Button, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FooterDev } from './Footer/Footer-dev'
import SmallWithLogoLeft from './Footer/Footer-dev-2'

export function Layout ({ children }) {
    return (
        <>
        <Flex
            minHeight={'100vh'}
            flexDirection={'column'}
            //marginX={'auto'}
            marginY={0}
            >
            {//<WithSubnavigation />
            }
            <WithSubnavigation />
                {<Box
                    backgroundColor={useColorModeValue('white', 'brand.dark.gray')}
                    >
                    { children }
                </Box>
                }
            {<SmallWithLogoLeft />
            }
        </Flex>
        </>
    )
}