import { Box, Flex, Container, Heading, Text, Tabs, Tab, TabList } from '@chakra-ui/react'

function Header() {

    return (
        <Box w='100%' h='275px' mb='50px' boxShadow='lg' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
            <Flex w='100%' p='20px'>
                <Container m='0px'>
                    <Heading mt='60px' ml='25px'  as='h1' color='#c9def7' fontSize='75px' fontWeight='bold'>healthapp</Heading>
                    <Text color='#c9def7' fontSize='25px'>it's bulking season</Text>
                </Container>
                <Container mr='0px' mt='60px'>
                    <Tabs color='#c9def7' align='end'>
                        <TabList>
                            <Tab fontSize='32px'>Home</Tab>
                            <Tab fontSize='32px'>Workout Log</Tab>
                            <Tab fontSize='32px'>Charts</Tab>
                        </TabList>
                    </Tabs>
                </Container>
            </Flex>
        </Box>
    )

}

export default Header