import { Box, Flex, Container, Heading, Tabs, Tab, TabList, Button } from '@chakra-ui/react'

function Header() {

    return (
        <Box w='100%' h='225px' mb='50px' boxShadow='lg' bgGradient='linear-gradient(135deg, #3CD889, #38F7EB)'>
            <Flex align='left'>
                <Container mt='75px' align='left'>
                    <Heading color='blue.800' fontSize='60px' fontWeight='bold'>health</Heading>
                </Container>
                <Container>

                </Container>
            </Flex>
        </Box>
    )

}

export default Header