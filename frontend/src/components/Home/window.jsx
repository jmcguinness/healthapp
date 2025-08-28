import { Container, Card, CardHeader, Button, Text, Input, FormControl, Flex, CardBody, Link } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Window () {

        return (
            <Card h='1250px' w='800px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='' bgColor='rgb(24, 112, 200)'>
                <>

                    <CardHeader mt='75px' fontSize='75px' color='#54D3B2' fontWeight='bold' textShadow='3px 2px 2px rgb(22, 6, 86)'>Resources</CardHeader>

                    <CardBody justify='center' ml='100px'>

                        <Flex fontSize='40px' mb='15px'>
                            <li><Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>The perfect squat</Link></li>
                        </Flex>

                        <Flex fontSize='40px' mb='15px'>
                            <li><Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Training for your first marathon</Link></li>
                        </Flex>

                        <Flex fontSize='40px' mb='15px'>
                            <li><Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Fixing your diet</Link></li>
                        </Flex>

                        <Flex fontSize='40px' mb='15px'>
                            <li><Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Recovering after leg day</Link></li>
                        </Flex>

                        <Flex fontSize='40px' mb='15px'>
                            <li><Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Get a six pack in 8 days</Link></li>
                        </Flex>

                        <Flex fontSize='40px' mb='15px'>
                            <li><Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Advice for getting 8 hours of sleep</Link></li>
                        </Flex>

                        <Flex fontSize='40px' mb='15px'>
                            <li><Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Home gym eqipment</Link></li>
                        </Flex>
                    

                    </CardBody>
                </>
            </Card>
        )
    } 


export default Window