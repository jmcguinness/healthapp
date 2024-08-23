import { Flex, Heading } from '@chakra-ui/react'
import NewWorkout from './NewWorkout'
import LiftingDashboard from './LiftingDashboard'
import RunningDashboard from './RunningDashboard'
import Header from '../Header'

function Home() {

    return (
        <>
        <div><Header /></div>
        <Flex justify='center' color='white' mt='50px' fontSize='90px'>
            <Heading fontSize='90px'>Welcome back, Josh</Heading>
        </Flex>

        <Flex h='2500px' justify='center' mt='150px'>

            <Flex mr='50px'>
                <LiftingDashboard />
            </Flex>

            <Flex mr='50px' ml='50px'>
                <NewWorkout />
            </Flex>

            <Flex ml='50px'>
                <RunningDashboard />
            </Flex>
            
        </Flex>
        </>
    )
}

export default Home