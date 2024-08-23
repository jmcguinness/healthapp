import { Card, CardHeader, Input, Text, Container, Stat, StatNumber, StatGroup, StatLabel, StatHelpText, StatArrow, Button } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function LiftingDashboard () {

    const [liftUpdate, setLiftUpdate] = useState(false)
    const [received, setReceived] = useState(false)
    
    const[bench, setBench] = useState()
    const[press, setPress] = useState()
    const[squat, setSquat] = useState()
    const[deadlift, setDeadlift] = useState()

    const[renderBench, setRenderBench] = useState()
    const[renderPress, setRenderPress] = useState()
    const[renderSquat, setRenderSquat] = useState()
    const[renderDeadlift, setRenderDeadlift] = useState()

    const handleUpdate = () => {
        setLiftUpdate(true)
    }

    const handleSubmit = () => {
        postUpdatedStats();
        setLiftUpdate(false)
    }

    const getStats = async () => {

        await axios ({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/liftingDashboard'
        }).then((response) => {
            console.log(response.data[0].bench)
            setRenderBench(response.data[0].bench)
            setRenderPress(response.data[0].press)
            setRenderSquat(response.data[0].squat)
            setRenderDeadlift(response.data[0].deadlift)
            setReceived(true)
        })
    }

    const postUpdatedStats = async () => {

        let postData = new FormData()

        postData.append('bench', bench)
        postData.append('press', press)
        postData.append('squat', squat)
        postData.append('deadlift', deadlift)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/liftingDashboard',
            data: postData
        }).then((response) => {
            console.log(response)
        })
    }

    const pageLoad = () => {
        getStats()
    }

    useEffect(() => {
        pageLoad()
    })

    if (liftUpdate == false) {
        return (
            <>

            <Card align='center' h='1000px' w='700px' bgColor='#f4f6fa' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2'>

                <CardHeader mt='25px' fontSize='75px' w='800px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2' mb='25px'>Strength Stats</CardHeader>

                <Button backgroundColor='#54D3B2' h='100px' w='250px' color='#243b55' fontSize='35px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='blue.800' onClick={handleUpdate}>Update Lifts</Button>


                <Container mt='50px'>
                    <StatGroup>
                        <Stat>
                            <StatLabel fontSize='30px' color='blue.800'>Bench Press</StatLabel>
                            <StatNumber fontSize='50px' color='#54D3B2'>{renderBench}</StatNumber>
                            <StatHelpText fontSize='30px'>
                            <StatArrow type='increase' />
                            23.36%
                            </StatHelpText>
                        </Stat>

                        <Stat>
                            <StatLabel fontSize='30px' color='blue.800'>Overhead Press</StatLabel>
                            <StatNumber fontSize='50px' color='#54D3B2'>{renderPress}</StatNumber>
                            <StatHelpText fontSize='30px'>
                            <StatArrow type='increase' />
                            23.36%
                            </StatHelpText>
                        </Stat>
                    </StatGroup>
                    <StatGroup mt='50px'>
                        <Stat>
                            <StatLabel fontSize='30px' color='blue.800'>Squat</StatLabel>
                            <StatNumber fontSize='50px' color='#54D3B2'>{renderSquat}</StatNumber>
                            <StatHelpText fontSize='30px'>
                            <StatArrow type='increase' />
                            23.36%
                            </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel fontSize='30px' color='blue.800'>Deadlift</StatLabel>
                            <StatNumber fontSize='50px' color='#54D3B2'>{renderDeadlift}</StatNumber>
                            <StatHelpText fontSize='30px'>
                            <StatArrow type='increase' />
                            23.36%
                            </StatHelpText>
                        </Stat>
                    </StatGroup>
                </Container>
            </Card>  
            </>

        )} else if (liftUpdate == true) {
            return (
                <>

                <Card align='center' h='1000px' w='700px' bgColor='#f4f6fa' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2'>

                    <CardHeader mt='25px' fontSize='75px' w='800px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2' mb='25px'>Strength Stats</CardHeader>

                    <Container display='flex' flexDir='column' align='center' justify='center'>

                        <Container display='flex'>
                            <Container>
                                <Text color='#243b55' fontSize='30px' fontWeight='bold'>Bench Press</Text>
                            </Container>
                            <Container>
                                <Input  variant='outline' mb='20px' h='65px' w='100px' outlineColor='black' ml='15px' fontSize='25px'  onChange={(e) => setBench(e.target.value)}></Input>
                            </Container>
                        </Container>

                        <Container display='flex'>
                            <Text mb='10px' color='#243b55' fontSize='30px' fontWeight='bold'>Shoulder Press</Text>
                            <Input  variant='outline' mb='20px' h='65px' w='100px' outlineColor='black' ml='15px' fontSize='25px' onChange={(e) => setPress(e.target.value)}></Input>
                        </Container>

                        <Container display='flex'>
                            <Text mb='10px' color='#243b55' fontSize='40px' fontWeight='bold'>Squat</Text>
                            <Input variant='outline' mb='20px' h='65px' w='100px' outlineColor='black' ml='15px' fontSize='25px' onChange={(e) => setSquat(e.target.value)}></Input>
                        </Container>

                        <Container display='flex'>
                            <Text mb='10px' color='#243b55' fontSize='40px' fontWeight='bold'>Deadlift</Text>
                            <Input variant='outline' mb='20px' h='65px' w='100px' outlineColor='black' ml='15px' fontSize='25px' onChange={(e) => setDeadlift(e.target.value)}></Input>
                        </Container>

                        <Button  backgroundColor='#54D3B2' h='75px' w='175px' mt='35px' color='#243b55' fontSize='35px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='blue.800' onClick={handleSubmit}>Submit</Button>
                        
                    </Container>
                </Card>  
                </>
            )
        }
}

export default LiftingDashboard