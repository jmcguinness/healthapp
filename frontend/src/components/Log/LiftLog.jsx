import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card, SimpleGrid, CardBody, CardHeader, Heading, Text, Center, Flex, Link, Button, Tabs, Tab, TabList, Input, FormControl,  Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalHeader, ModalFooter, useDisclosure, Select,   AlertDialog, AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton, } from '@chakra-ui/react'
import Header from '../Header'

function LiftLog() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    return(
        <>
        <Flex justify='center' mt='75px' mb='50px'>
        <Text color='white' fontSize='75px'> Workout Log</Text>
        </Flex>

        <Flex justify='center'>

        </Flex>

        <Flex justify='center'>

        <Center>
        <SimpleGrid columns={2} p={5} m='25px'>
        <Card h='1200px' w='1000px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
            <CardHeader mt='25px'>
            <Button ml='870px' onClick={onOpen} fontSize='30px' w='35px' h='35px' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>X</Button>
            <Heading fontSize='50px' color='white' mt='25px'> Week 1 - Day 1 </Heading>
            <Text mt='25px' fontSize='75px'>🏋️‍♂️</Text>
            <Text color='#c9def7' fontSize='40px' mt='25px'>8/12/2025</Text>
            </CardHeader>
            <CardBody ml='100px' mr='100px' mt='25px'>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Bench Press - 3x5</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>190</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Incline Bench Press - 6x5</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>135</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Pull Ups - 5x10</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>0</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Lateral Raise - 5x10</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>25</Text>

            </CardBody>
        </Card>
        <Card h='1200px' w='1000px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
            <CardHeader mt='25px'>
            <Button ml='870px' onClick={onOpen} fontSize='30px' w='35px' h='35px' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>X</Button>
            <Heading fontSize='50px' color='white' mt='25px'> Week 1 - Day 2 </Heading>
            <Text mt='25px' fontSize='75px'>🏋️‍♂️</Text>
            <Text color='#c9def7' fontSize='40px' mt='25px'>8/14/2025</Text>
            </CardHeader>
            <CardBody ml='100px' mr='100px' mt='25px'>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Squat - 3x5</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>215</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Stiff Leg Deadlift - 6x5</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>105</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Pull Ups - 5x10</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>0</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Bicep Curls - 5x10</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>50</Text>

            </CardBody>
        </Card>
        <Card h='1200px' w='1000px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
            <CardHeader mt='25px'>
            <Button ml='870px' onClick={onOpen} fontSize='30px' w='35px' h='35px' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>X</Button>
            <Heading fontSize='50px' color='white' mt='25px'> Week 1 - Day 3 </Heading>
            <Text mt='25px' fontSize='75px'>🏋️‍♂️</Text>
            <Text color='#c9def7' fontSize='40px' mt='25px'>8/16/2025</Text>
            </CardHeader>
            <CardBody ml='100px' mr='100px' mt='25px'>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Overhead Press - 3x5</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>115</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Bench Press - 6x5</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>117.5</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Incline Bench Press - 5x10</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>135</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Skull Crusher - 5x10</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>40</Text>

            </CardBody>
        </Card>
        <Card h='1200px' w='1000px'  m='50px' align='center' justify='center' borderStyle='solid' borderWidth='4px' borderColor='#c9def7' bgGradient='linear-gradient(to right, #141e30, #243b55)'>
            <CardHeader mt='25px'>
            <Button ml='870px' onClick={onOpen} fontSize='30px' w='35px' h='35px' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>X</Button>
            <Heading fontSize='50px' color='white' mt='25px'> Week 1 - Day 4 </Heading>
            <Text mt='25px' fontSize='75px'>🏋️‍♂️</Text>
            <Text color='#c9def7' fontSize='40px' mt='25px'>8/19/2025</Text>
            </CardHeader>
            <CardBody ml='100px' mr='100px' mt='25px'>
                
                <Text color='#54D3B2' fontSize='40px' mr='10px'>Deadlift - 3x5</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>185</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Front Squat - 6x5</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>135</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Bent Over Row - 5x10</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>115</Text>

                <Text color='#54D3B2' fontSize='40px' mr='10px'>Reverse Fly - 5x10</Text>
                <Text color='white' fontSize='45px' fontWeight='bold' ml='10px' mb='25px'>35</Text>

            </CardBody>
        </Card>
        </SimpleGrid>
        </Center>

        </Flex>


        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
    >
        <AlertDialogOverlay>
        <AlertDialogContent mt='650px' maxW='875px' h='450px' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2' bgColor='#c9def7'>
            <AlertDialogHeader fontSize='65px' fontWeight='bold'>
            Delete Activity
            </AlertDialogHeader>

            <AlertDialogBody fontSize='35px'>
            Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} w='150px' h='75px' fontSize='30px'>
                Cancel
            </Button>
            <Button colorScheme='red' onClick={onClose} ml={3} w='150px' h='75px' fontSize='30px'>
                Delete
            </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialogOverlay>
        </AlertDialog>
    </>
    )
}

export default LiftLog