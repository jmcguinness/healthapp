import { Flex } from '@chakra-ui/react'
import NewWorkout from './NewWorkout'
import LiftingDashboard from './LiftingDashboard'
import RunningDashboard from './RunningDashboard'

function Home() {

    return (

        <Flex h='1500px' justify='center' mt='150px'>

            <Flex mt='50px' mr='50px'>
                <LiftingDashboard />
            </Flex>

            <Flex mt='50px' mr='50px' ml='50px'>
                <NewWorkout />
            </Flex>

            <Flex mt='50px' ml='50px'>
                <RunningDashboard />
            </Flex>
            
        </Flex>
    )
}

export default Home