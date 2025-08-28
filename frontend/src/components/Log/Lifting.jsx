import { useState, useEffect,  } from 'react';
import axios from 'axios';
import { Card, SimpleGrid, CardBody, CardHeader, Heading, Text, Center, Flex, Link, Button, Tabs, Tab, TabList, Input, FormControl, FormLabel, NumberInput, NumberInputField, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, ModalFooter, useDisclosure, Select } from '@chakra-ui/react'
import Header from '../Header'
import LiftLog from './LiftLog';

function Lifting () {


    const [day2FormDisplay, setDay2FormDisplay] = useState();
    const [currentProgram, setCurrentProgram] = useState('The Rippler');

    const [day, setDay] = useState()

    const [t1Form, setT1Form] = useState();
    const [t2Form, setT2Form] = useState();
    const [a1Form, setA1Form] = useState();
    const [a2Form, setA2Form] = useState();

    const handleDay1Add = () => {

        setDay('Day 1')
        setT1Form('Bench Press')
        setT2Form('Incline Bench Press')
        setA1Form('Pull Ups')
        setA2Form('Lateral Raise')

        onOpen();

    }

    const handleDay2Add = () => {

        setDay('Day 2')
        setT1Form('Squat')
        setT2Form('Stiff Leg Deadlift')
        setA1Form('Pull Ups')
        setA2Form('Bicep Curls')

        onOpen();

    }

    const handleDay3Add = () => {

        setDay('Day 3')
        setT1Form('Overhead Press')
        setT2Form('Bench Press')
        setA1Form('Incline Bench Press')
        setA2Form('Skull Crushers')

        onOpen();

    }

    const handleDay4Add = () => {

        setDay('Day 4')
        setT1Form('Deadlift')
        setT2Form('Front Squat')
        setA1Form('Bent Over Row')
        setA2Form('Reverse Fly')

        onOpen();

    }

    const deleteActivityModal = () => {


    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    const Day2FormOpen = () => {

        setDay2FormDisplay(



        )
    }


    return (
                <>
                    <div><Header /></div>
                    <Flex justify='center' borderStyle='solid' borderWidth='1px' bgColor='rgb(24, 112, 200)' bgGradient='linear-gradient(to right,rgb(30, 44, 70), rgb(30, 44, 70),  rgb(30, 44, 70), rgb(42, 110, 144),#54D3B2)' h='250px' align='center' mt='100px'>
                    <Heading fontSize='100px' color='#c9def7'>Lifting Log</Heading>
                    </Flex>
                    <Flex mt='150px' mb='25px' justify='center'>

                        <Text color='white' fontSize='75px'>Current Program</Text>

                    </Flex>

                    <Flex mb='50px' justify='center'>

                    <Text color='#c9def7' fontSize='50px'>{currentProgram}</Text>

                    </Flex>

                    <Flex mb='75px' justify='center'>

                    <Select placeholder='Select Program' bgColor='#c9def7' h='65px' w='350px' fontSize='35px' textAlign='center'>

                        <option value='The Rippler'>The Rippler</option>
                        <option value='GZLCP'>GZLCP</option>
                        <option value='nsuns'>nsuns</option>

                    </Select>

                    </Flex>

                    <Flex justify='center'>

                        <Tabs color='#c9def7'>
                            <TabList>
                                <Tab fontSize='32px' color='#c9def7'>Week 1</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 2</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 3</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 4</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 5</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 6</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 7</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 8</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 9</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 10</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 11</Tab>
                                <Tab fontSize='32px' color='#c9def7'>Week 12</Tab>
                            </TabList>
                        </Tabs>

                    </Flex>

                    <Flex justify='center'>

                        {day2FormDisplay}

                    <Center>
                    <SimpleGrid columns={4} p={5} m='25px'>
                        <Card h='1000px' w='850px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
                            <CardHeader mt='25px'>
                            <Heading fontSize='60px' color='#c9def7'> Day 1 </Heading>
                            </CardHeader>
                            <CardBody ml='100px' mr='100px' mt='25px'>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Bench Press</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>3x5 (80% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Incline Bench Press</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>6x5 (68% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Pull Ups</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>5x10 (75% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Lateral Raise</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>5x10 (75% 1RM)</Text>

                                <Button backgroundColor='#243b55' h='100px' w='250px' color='#c9def7' fontSize='35px'  variant='outline' borderWidth='1px' borderStyle='solid' borderColor='gray' mt='35px' onClick={handleDay1Add}>Log Workout</Button>

                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent mt='500px' h='2000px' maxWidth='1200px' bgGradient='linear-gradient(to right, #141e30, #243b55)' borderWidth='1px' borderStyle='solid' borderColor='gray'>
                                        <ModalCloseButton color='white' fontSize='25px' mt='25px' mr='10px'/>
                                        <ModalBody>
                                        <FormControl isRequired>
                                            <Flex justify='center' mt='50px'>
                                                <Heading color='#c9def7'>
                                                Submit {day} Workout
                                                </Heading>
                                            </Flex>

                                            <Flex justify='center'>
                                                <FormLabel color='#c9def7' mt='75px' fontSize='35px'>
                                                    Workout Date
                                                </FormLabel>
                                            </Flex>
                                            <Flex justify='center'>
                                                <Input type='date' color='blue.900' bgColor='white' w='200px' h='75px' fontSize='20px' mt='25px' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2'></Input>
                                            </Flex>

                                            <Flex justify='center' mt='50px'>
                                            <Text color='#54D3B2' fontSize='45px'>{t1Form}</Text>
                                            </Flex>
                                            <Flex mt='35px' justify='center'>
                                                <FormLabel color='white' fontSize='35px' mr='10px'>Weight</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField w='125px' h='65px' ml='10px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                            </Flex>
                                            <Flex mt='35px' justify='center'>
                                                <FormLabel color='white' fontSize='35px' mr='15px'>Reps</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField w='90px' h='65px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                                <Text color='white' fontSize='50px' ml='10px' mr='10px'>X</Text>
                                                <NumberInput>
                                                    <NumberInputField w='90px' h='65px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                            </Flex>

                                            <Flex justify='center' mt='75px'>
                                            <Text color='#54D3B2' fontSize='45px'>{t2Form}</Text>
                                            </Flex>
                                            <Flex mt='35px' justify='center'>
                                                <FormLabel color='white' fontSize='35px' mr='10px'>Weight</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField w='125px' h='65px' ml='10px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                            </Flex>
                                            <Flex mt='35px' justify='center'>
                                                <FormLabel color='white' fontSize='35px' mr='15px'>Reps</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField w='90px' h='65px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                                <Text color='white' fontSize='50px' ml='10px' mr='10px'>X</Text>
                                                <NumberInput>
                                                    <NumberInputField w='90px' h='65px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                            </Flex>

                                            <Flex justify='center' mt='75px'>
                                            <Text color='#54D3B2' fontSize='45px'>{a1Form}</Text>
                                            </Flex>
                                            <Flex mt='35px' justify='center'>
                                                <FormLabel color='white' fontSize='35px' mr='10px'>Weight</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField w='125px' h='65px' ml='10px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                            </Flex>
                                            <Flex mt='35px' justify='center'>
                                                <FormLabel color='white' fontSize='35px' mr='15px'>Reps</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField w='90px' h='65px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                                <Text color='white' fontSize='50px' ml='10px' mr='10px'>X</Text>
                                                <NumberInput>
                                                    <NumberInputField w='90px' h='65px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                            </Flex>

                                            <Flex justify='center' mt='75px'>
                                            <Text color='#54D3B2' fontSize='45px'>{a2Form}</Text>
                                            </Flex>
                                            <Flex mt='35px' justify='center'>
                                                <FormLabel color='white' fontSize='35px' mr='10px'>Weight</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField w='125px' h='65px' ml='10px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                            </Flex>
                                            <Flex mt='35px' justify='center'>
                                                <FormLabel color='white' fontSize='35px' mr='15px'>Reps</FormLabel>
                                                <NumberInput>
                                                    <NumberInputField w='90px' h='65px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                                <Text color='white' fontSize='50px' ml='10px' mr='10px'>X</Text>
                                                <NumberInput>
                                                    <NumberInputField w='90px' h='65px' bgColor='#F2F0EF' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' fontSize='35px' />
                                                </NumberInput>
                                            </Flex>
                                            <Flex justify='center' mt='100px'>
                                            <Button colorScheme='blue' h='100px' w='200px' fontSize='35px' borderWidth='2px' borderStyle='solid' borderColor='white'>
                                            Submit
                                            </Button>
                                            </Flex>
                                            </FormControl>
                                        </ModalBody>
                                    </ModalContent>
                                </Modal>

                            </CardBody>
                        </Card>
                        <Card h='1000px' w='850px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
                            <CardHeader mt='25px'>
                            <Heading fontSize='60px' color='#c9def7'> Day 2 </Heading>
                            </CardHeader>
                            <CardBody ml='100px' mr='100px' mt='25px'>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Squat</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>3x5 (80% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Stiff Leg Deadlift</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>6x5 (68% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Pull Ups</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>5x10 (75% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Bicep Curls</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>5x10 (75% 1RM)</Text>

                                <Button backgroundColor='#243b55' h='100px' w='250px' color='#c9def7' fontSize='35px'  variant='outline' borderWidth='1px' borderStyle='solid' borderColor='gray' mt='35px' onClick={handleDay2Add}>Log Workout</Button>

                            </CardBody>
                        </Card>
                        <Card h='1000px' w='850px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
                            <CardHeader mt='25px'>
                            <Heading fontSize='60px' color='#c9def7'> Day 3 </Heading>
                            </CardHeader>
                            <CardBody ml='100px' mr='100px' mt='25px'>
  
                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Overhead Press</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>3x5 (80% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Bench Press</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>6x5 (68% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Incline Bench Press</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>5x10 (75% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Skull Crushers</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>5x10 (75% 1RM)</Text>

                                <Button backgroundColor='#243b55' h='100px' w='250px' color='#c9def7' fontSize='35px'  variant='outline' borderWidth='1px' borderStyle='solid' borderColor='gray' mt='35px' onClick={handleDay3Add}>Log Workout</Button>

                            </CardBody>
                        </Card>
                        <Card h='1000px' w='850px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
                            <CardHeader mt='25px'>
                            <Heading fontSize='60px' color='#c9def7'> Day 4 </Heading>
                            </CardHeader>
                            <CardBody ml='100px' mr='100px' mt='25px'>
                                
                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Deadlift</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>3x5 (80% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Front Squat</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>6x5 (68% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Bent Over Row</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>5x10 (75% 1RM)</Text>

                                <Text color='#54D3B2' fontSize='40px' mr='10px'>Reverse Fly</Text>
                                <Text color='white' fontSize='40px' ml='10px' mb='25px'>5x10 (75% 1RM)</Text>

                                <Button backgroundColor='#243b55' h='100px' w='250px' color='#c9def7' fontSize='35px'  variant='outline' borderWidth='1px' borderStyle='solid' borderColor='gray' mt='35px' onClick={handleDay4Add}>Log Workout</Button>

                            </CardBody>
                        </Card>
                </SimpleGrid>
                </Center>

                </Flex>

                <LiftLog />

                

                </>
            )

}

export default Lifting