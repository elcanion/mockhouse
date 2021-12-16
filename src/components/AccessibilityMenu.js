import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ContrastSwitch } from "./ContrastSwitch"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { MdAccessibility } from 'react-icons/md'

export const AccessibilityMenu = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Acessibilidade
            </MenuButton>
        </Menu>
    )
}

export const MobileAccessibilityMenu = () => {
    return (
        <Menu>
            <MenuButton as={IconButton} icon={<MdAccessibility />}/>
        </Menu>
    )
}