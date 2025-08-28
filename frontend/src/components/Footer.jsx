import { Box, Text, Flex, Link, Spacer, Container } from '@chakra-ui/react'

function Footer () {

    return (
        <Box className='footer' w='100%' h='225px' boxShadow='lg' bgGradient='linear-gradient(to right, #141e30, #243b55)' overflow='auto' mt='100px'>

            <Flex align='center' justify='center'>
                <Container mt='65px'>
                    <Text color='white' fontSize='25px' mb='10px'>Developed by Josh McGuinness</Text>
                    <Link href='https://github.com/jmcguinness/healthapp' color='white' fontSize='25px' isExternal>
                        Github
                    </Link>
                </Container>
            </Flex>

        </Box>
    )
}

export default Footer