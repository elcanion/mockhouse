import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { useAuth } from './Auth/AuthContext';
import { LoginButton, LogoutButton } from './LoginButton';
import { Unamed } from './logo';
import { DarkModeSwitch } from './DarkModeSwitch';
import { MdAccessibility } from 'react-icons/md';
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const { currentUser, logout } = useAuth();
  
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex 
            flex={{ base: 1 }} 
            justify={{ base: 'center', md: 'start' }}
            //alignItems={'center'}
            >
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            ******
          </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            {
            currentUser &&
            <LogoutButton/>
            }
            
            {
            !currentUser &&
            <LoginButton />
            }

            
            <AccessibilityNav />
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
        <MobileAccessibilityNav />
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('black', 'white')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              color={useColorModeValue('black', 'white')}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            color={useColorModeValue('black', 'white')}
            borderColor={useColorModeValue('black', 'white')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  const AccessibilityNav = () => {
    const linkColor = useColorModeValue('black', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
    <>
      <Stack direction={'row'} spacing={4} 
      display={{ base: 'none', md: 'inline-flex' }}
      alignItems={'center'}
      >
          <Box key='Accessibilidade'>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={'#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  borderWidth={'1px'}
                  borderColor={linkColor}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                      Acessibilidade
                </Link>
              </PopoverTrigger>
  
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    <AccessibilitySubNav />
                  </Stack>
                </PopoverContent>
              
            </Popover>
            
          </Box>
        )
        
      </Stack>
      </>
    );
  };

const MobileAccessibilityNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const { isOpen, onToggle } = useDisclosure();
  return (

        <Stack spacing={4} onClick={onToggle}>
        <Flex
          py={2}
          as={Link}
          //href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('black', 'white')}>
            Acessibilidade
          </Text>
          {//children && (
            <Icon
              as={ChevronDownIcon}
              color={useColorModeValue('black', 'white')}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          //)
          }
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            color={useColorModeValue('black', 'white')}
            borderColor={useColorModeValue('black', 'white')}
            align={'start'}>
            {
                <AccessibilitySubNav />
            }
          </Stack>
        </Collapse>
      </Stack>
  )
}
  
  const AccessibilitySubNav = () => {
    return (
        <>
        <DarkModeSwitch />
        {//<ContrastSwitch />
        }
        </>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: 'Contatos',
      children: [
        {
          label: 'Ada Lovelace',
          subLabel: 'Converse com Ada via Whatsapp',
          href: '#',
        },
        {
            label: 'Albert Einstein',
            subLabel: 'Converse com Albert via Whatsapp',
            href: '#',
          },
      ],
    },
  ];

  export const Logo = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 140.54 52.85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.55,52.85a11.72,11.72,0,0,1-1.95-.69q-7.08-4.11-14.13-8.29-6-3.54-12-7.1c-.9-.52-1.82-1-2.71-1.54a1.08,1.08,0,0,0-1.33,0C28.81,38,24.18,40.7,19.55,43.4Q12.31,47.63,5,51.84c-1.3.75-1.77.47-1.77-1,0-8.35,0-16.69,0-25a2.55,2.55,0,0,1,1.59-2.59c1.54-.82,3-1.75,4.63-2.71L3.81,17.13c-1-.62-2.08-1.22-3.1-1.87s-.95-1,0-1.59c1.56-.91,3.15-1.78,4.72-2.68L16.81,4.53Q20.08,2.67,23.38.84a1.43,1.43,0,0,1,1.67,0c2.53,1.59,5.14,3,7.67,4.6a2.19,2.19,0,0,0,2.62-.19c2.81-1.71,5.66-3.34,8.48-5a1.52,1.52,0,0,1,1.77,0Q50.77,3.4,56,6.41c3.19,1.85,6.4,3.67,9.59,5.5L68,13.33c.83.47.88,1.05.08,1.54C66.24,16,64.35,17.1,62.48,18.2l-4,2.37c1.73,1,3.3,2.1,5,2.89a3.39,3.39,0,0,1,2.16,3.64c-.13,8.07-.06,16.15-.06,24.22ZM24.76,20.41c0,2.18,0,4.36,0,6.54A1.52,1.52,0,0,0,25.4,28q4,2.45,8.15,4.78a1.42,1.42,0,0,0,1.19,0Q39,30.29,43.3,27.7a1.25,1.25,0,0,0,.54-.9c0-4.16,0-8.32,0-12.47a1.49,1.49,0,0,0-.67-1.06q-4.24-2.6-8.56-5.07a1.57,1.57,0,0,0-1.27-.08q-4,2.28-8,4.7A1.56,1.56,0,0,0,24.78,14C24.73,16.11,24.76,18.26,24.76,20.41Zm.75,17.75L4.75,25.55V50.31ZM64.1,27.45,44.58,39.31,64.1,50.73ZM35.64,33.93a1.37,1.37,0,0,0,.23.27c2.25,1.33,4.5,2.67,6.77,4a1.24,1.24,0,0,0,1,0c1.12-.6,2.21-1.27,3.3-1.94l14.48-8.86,2.76-1.68c-2.3-1.37-4.41-2.6-6.48-3.88a1.29,1.29,0,0,0-1.52.05q-5.53,3.29-11.08,6.55Q40.39,31.17,35.64,33.93Zm9.62-32.1c0,3.62,0,7,0,10.43a1.12,1.12,0,0,0,.47.77c.86.57,1.78,1.07,2.67,1.6,2.68,1.59,5.35,3.2,8,4.75a1.25,1.25,0,0,0,1,0c1.36-.72,2.69-1.5,4-2.27,1.63-1,3.26-1.94,5-3Zm-21.9.72-21.11,12c2.73,1.62,5.36,3.22,8,4.76a1.36,1.36,0,0,0,1.15,0c1.7-.93,3.36-1.94,5-2.92,2.06-1.19,4.13-2.36,6.17-3.58a1.46,1.46,0,0,0,.69-1C23.38,8.77,23.36,5.74,23.36,2.55ZM5.72,24.4c.73.46,1.4.89,2.09,1.31Q17,31.32,26.27,36.9c.28.16.74.34.95.23,1.8-1,3.57-2.06,5.38-3.12-1.3-.78-2.51-1.51-3.72-2.21-5.79-3.37-11.59-6.72-17.35-10.13a1.1,1.1,0,0,0-1.35,0ZM23.3,14,12.37,20.46,23.3,26.85Zm32.26,6.54L45.31,14.52V26.57ZM35.34,7l8.47,5V2ZM24.79,11.44l7.66-4.5L24.79,2.43Z"
          fill="currentColor"
        />
      </Icon>
    );
  };