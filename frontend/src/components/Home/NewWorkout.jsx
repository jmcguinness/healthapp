import { Container, Card, CardHeader, Button, Text, Input } from '@chakra-ui/react'
import { useState } from 'react'

function NewWorkout () {

    const [newWorkout, setNewWorkout] = useState(false)
    const [typeSelected, setTypeSelected] = useState(false)
    const [runSelected, setRunSelected] = useState(false)
    const [liftSelected, setLiftSelected] = useState(false)

    const handleNewWorkout = () => {
        setNewWorkout(true)
    }

    const handleRun = () => {
        setTypeSelected(true)
        setRunSelected(true)
    }

    const handleLift = () => {
        setTypeSelected(true)
        setLiftSelected(true)
    }

    const handleSubmit = () => {
        setNewWorkout(false)
        setTypeSelected(false)
        setRunSelected(false)
        setLiftSelected(false)
    }

    if (newWorkout == false) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='100px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800' fontWeight='bold'>Upcoming workout details</CardHeader>
                <Container mb='75px'>
                    <Text fontSize='27.5px' color='blue.800'>Bench -- TM190</Text>
                    <Text fontSize='27.5px' color='blue.800'>Overhead Press -- TM125</Text>
                    <Text fontSize='27.5px' color='blue.800'>Incline Press -- 3x6</Text>
                    <Text fontSize='27.5px' color='blue.800'>Seated Row -- 3x12</Text>
                    <Text fontSize='27.5px' color='blue.800'>Fly Machine -- 3x15</Text>
                    <Text fontSize='27.5px' color='blue.800'>Curls -- 3x20</Text>
                    <Text fontSize='27.5px' color='blue.800'>Skullcrushers -- 3x8</Text>
                </Container>
                <Container>
                    <Button h='100px' w='260px' mr='8px' bgColor='#c9def7' color='blue.800' fontSize='35px' fontWeight='bold' variant='outline' borderWidth='1px' borderColor='blue.800'
                    onClick={handleNewWorkout}>
                        New Workout
                    </Button>
                </Container>
            </Card>
        )
    } else if (newWorkout == true & typeSelected == false) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <Container mt='75px'>
                    <Button h='75px' w='125px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800'>Back</Button>
                </Container>    
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='25px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800'>Please select the workout type</CardHeader>
                <Container>
                    <Button h='90px' w='180px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                    onClick={handleRun}>
                        Run
                    </Button>
                    <Button h='90px' w='180px' ml='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold'
                    onClick={handleLift}>
                        Lift
                    </Button>
                </Container>
            </Card>
    )
    } else if (newWorkout == true & typeSelected == true & runSelected == true) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <Container mt='75px'>
                    <Button h='75px' w='125px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800'>Back</Button>
                </Container> 
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' mt='25px' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800'>Please provide the run details</CardHeader>
                <Container>
                    <Input variant='outline' mb='75px' h='250px' outlineColor='black'></Input>
                </Container>
                <Container>
                    <Button h='90px' w='180px' mr='8px' color='blue.800' bgColor='#c9def7' borderWidth='1px' borderColor='blue.800' fontSize='35px' fontWeight='bold' mt='15px'
                    onClick={handleSubmit}>
                        Submit
                    </Button>
                </Container>
            </Card>
    )
    } else if (newWorkout == true & typeSelected == true & liftSelected == true) {
        return (
            <Card h='1000px' w='750px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='#c9def7' bgColor='white'>
                <Container mt='75px'>
                    <Button h='75px' w='125px' fontSize='30px' borderStyle='solid' borderWidth='2px' borderColor='blue.800' color='blue.800'>Back</Button>
                </Container> 
                <CardHeader fontSize='75px' color='blue.800' fontWeight='bold' textShadow='3px 2px 2px #54D3B2'>Next Workout</CardHeader>
                <CardHeader fontSize='35px' mb='25px' color='blue.800'>Please provide the lift details</CardHeader>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px'></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px'></Input>
                </Container>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px'></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px'></Input>
                </Container>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px'></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px'></Input>
                </Container>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px'></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px'></Input>
                </Container>
                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px'></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px'></Input>
                </Container>
                                <Container>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' mr='15px'></Input>
                    <Input variant='outline' mb='20px' h='50px' w='200px' outlineColor='black' ml='15px'></Input>
                </Container>
                <Container>
                    <Button h='90px' w='180px' mr='8px' color='blue.800' bgColor='#c9def7' fontSize='35px' fontWeight='bold' borderWidth='1px' borderColor='blue.800' mt='15px'
                    onClick={handleSubmit}>
                        Submit
                    </Button>
                </Container>
            </Card>
    )
    }
}

export default NewWorkout