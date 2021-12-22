import { Box, Center, Flex, Heading, List, ListIcon, ListItem, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { FaArrowsAlt, FaBath, FaBed, FaCar, FaCouch, FaShower, FaToilet, FaUtensils } from "react-icons/fa"

export const SlugProperties = ({ imovel }) => {
    const { dormitorios, suites, salas, cozinhas, banheiros, lavabos, vagas, depEmpregada, area } = imovel.fields
    return (
        <Box paddingBottom={10}>
            <Center>
            <Stack width={'full'} flexDirection={'column'}  maxW={'1200px'} mx={{ base: 5, md: 16, lg: 10 }}>
            <List>
                { dormitorios != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                        <ListItem>
                            <ListIcon as={FaBed} />
                            Dormitórios 
                        </ListItem>
                    
                    <Text color={useColorModeValue('black', 'white')}>{ dormitorios }</Text>
                </Flex>
                }
                {}
                
                { suites != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                    <ListItem>
                            <ListIcon as={FaBath} />
                            Suítes
                        </ListItem>
                    <Text color={useColorModeValue('black', 'white')}>{ suites }</Text>
                </Flex>
                }
                { salas != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                    <ListItem>
                            <ListIcon as={FaCouch} />
                            Salas
                        </ListItem>
                    <Text color={useColorModeValue('black', 'white')}>{ salas }</Text>
                </Flex>
                }
                { cozinhas != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                    <ListItem>
                            <ListIcon as={FaUtensils} />
                            Cozinhas
                        </ListItem>
                    <Text color={useColorModeValue('black', 'white')}>{ cozinhas }</Text>
                </Flex>
                }
                { banheiros != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                    <ListItem>
                            <ListIcon as={FaShower} />
                            Banheiros
                        </ListItem>
                    <Text color={useColorModeValue('black', 'white')}>{ banheiros }</Text>
                </Flex>
                }
                { lavabos != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                    <ListItem>
                            <ListIcon as={FaToilet} />
                            Lavabos
                        </ListItem>
                    <Text color={useColorModeValue('black', 'white')}>{ lavabos }</Text>
                </Flex>
                }
                { vagas != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                    <ListItem>
                            <ListIcon as={FaCar} />
                            Vagas
                        </ListItem>
                    <Text color={useColorModeValue('black', 'white')}>{ vagas }</Text>
                </Flex>
                }
                { depEmpregada != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                    <ListItem>
                            <ListIcon as={FaBed} />
                            Dep. Empregada
                        </ListItem>
                    <Text color={useColorModeValue('black', 'white')}>{ depEmpregada }</Text>
                </Flex>
                }
                { area != 0 && <Flex justify={'space-between'} py={2} borderBottomWidth={1} color={useColorModeValue('black', 'white')}>
                    <ListItem>
                            <ListIcon as={FaArrowsAlt} />
                            Área 
                        </ListItem>
                    <Text color={useColorModeValue('black', 'white')}>{ area }</Text>
                </Flex>
                }
                </List>
            </Stack>
            </Center>
        </Box>
    )
}