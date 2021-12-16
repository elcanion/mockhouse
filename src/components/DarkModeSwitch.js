import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode } from "@chakra-ui/react"

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Button
        aria-label={colorMode === 'dark' ? 'Modo claro' : 'Modo escuro'}
        fontSize={'sm'}
        onClick={toggleColorMode}
        leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    >
        {colorMode === 'dark' ? 'Modo claro' : 'Modo escuro'}
        </Button>
    )
}