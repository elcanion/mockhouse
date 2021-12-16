import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react"
import { ContrastSwitch } from "./ContrastSwitch"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { MdAccessibility, MdAccessibilityNew } from 'react-icons/md'

export const AccessibilityMenu = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <>
        <Flex
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }}
        display={{ base: 'flex', md: 'none' }}>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <MdAccessibilityNew w={10} h={10} />
          }
          variant={'ghost'}
          aria-label={'Toggle Accessibility Navigation'}
        />
      </Flex>
        
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
            <MenuButton as={IconButton} icon={<MdAccessibility />}/>
        </Menu>
    )
}