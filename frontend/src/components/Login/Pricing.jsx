import { Text, Box, Flex, Button, CardBody, Card } from '@chakra-ui/react'
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
            <Flex justify='center' align='center' mt='250px'>
                <Card h='750px' w='1500px' justify='center' align='center'>
                    <CardBody mt='100px'>
                        <Text color='#243b55' fontFamily='Roboto' fontSize='100px'>Premium Package</Text>
                        <Text color='#243b55' fontFamily='Roboto' fontSize='75px'>$ 0.00</Text>
                    </CardBody>
                </Card>
            </Flex>
        </Box>
        </>
    )
}

export default Pricing