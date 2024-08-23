import { Text, Box, Flex, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Pricing () {

    const navigate = useNavigate();

    return (
        <>
        <Box h='2500px'>
            <Flex  backgroundColor='#54D3B2' borderBottom='4px' justify='center' borderStyle='solid' borderColor='#c9def7'>
                    <Flex>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='45px' fontWeight='bold' fontFamily='Roboto' onClick={() => navigate('/login')}>physiness</Button>
                    </Flex>
                    <Flex justify='center' align='center'>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/about')}>About</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/createUser')}>Create Account</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/pricing')}>Pricing</Button>
                        <Button backgroundColor='#54D3B2' h='100px' w='300px' color='#243b55' fontSize='35px' fontFamily='Roboto' onClick={() => navigate('/contact')}>Contact Us</Button>
                    </Flex>
                </Flex>
                <Text color='#c9def7' fontFamily='Roboto' fontSize='100px' mt='200px'>Premium Package</Text>
                <Text color='white' fontFamily='Roboto' fontSize='75px'>$ 0.00</Text>
        </Box>
        </>
    )
}

export default Pricing