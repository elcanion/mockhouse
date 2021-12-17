import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react"
import { ContrastSwitch } from "./ContrastSwitch"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { MdAccessibility, MdAccessibilityNew } from 'react-icons/md'

export const AccessibilityMenu = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Acessibilidade
            </MenuButton>
        </Menu>
        {/*<Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Acessibilidade
            </MenuButton>
        </Menu>
        */}
        </>
    )
}

export const MobileAccessibilityMenu = () => {
    return (
        <Menu>
            <IconButton aria-label={'Acessibilidade'} icon={<MdAccessibility />} />
        </Menu>
    )
}