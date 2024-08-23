import { Box, Flex, Card, CardHeader, Container, Heading, Stat, StatNumber, StatGroup, StatLabel, StatHelpText, StatArrow, Spacer } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function RunningDashboard () {

    const [workoutData, setWorkoutData] = useState();
    const [request, setRequest] = useState();
    const [prevRunMilage, setPrevRunMilage] = useState();
    const [prevRunTime, setPrevRunTime] = useState();
    const [longestRun, setLongestRun] = useState();

    const pageLoad = () => {
        getDashboardDetails()
    }

    const getDashboardDetails = () => {

        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/runDashboard'
        }).then((response) => {
            console.log(response.data)
            setPrevRunMilage(Math.round(((response.data[0].distance * 0.000621371) + Number.EPSILON) * 100) / 100)
            setPrevRunTime(Math.round(response.data[0].movingTime / 60))
            setLongestRun(response.data[0].distance)
            console.log(longestRun)
            console.log(prevRunTime)
        })
    }

    useEffect(() => { 
        pageLoad();
    },[])

    return (
         <>

         <Card align='center' h='1000px' w='700px' bgColor='#f4f6fa' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2'>

            <CardHeader mt='25px' fontSize='75px' w='800px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2' mb='25px'>Running Stats</CardHeader>


            <Container>
                <StatGroup>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Previous Run Milage</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>{prevRunMilage} miles</StatNumber>
                    </Stat>
                </StatGroup>
                <StatGroup mt='50px'>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Previous Run Time</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>{prevRunTime} mins</StatNumber>
                    </Stat>
                </StatGroup>
                <StatGroup mt='50px'>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Longest Run</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>{longestRun} Miles</StatNumber>
                    </Stat>
                </StatGroup>
                <StatGroup mt='50px'>
                    <Stat>
                        <StatLabel fontSize='30px' color='blue.800'>Fastest Mile</StatLabel>
                        <StatNumber fontSize='50px' color='#54D3B2'>6:43</StatNumber>
                    </Stat>
                </StatGroup>
            </Container>
        </Card>  
        </>

    )
}

export default RunningDashboard