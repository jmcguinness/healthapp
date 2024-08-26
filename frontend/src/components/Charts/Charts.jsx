import { Flex, Heading, Card, CardBody, Box } from '@chakra-ui/react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from "recharts";
import { useState, useEffect } from "react";
import Header from '../Header'
import axios from 'axios';


function Charts () {

    const [ workoutData, setWorkoutData ] = useState()
    const [ month, setMonth ] = useState()
    const [ date, setDate ] = useState()

    const getWorkoutDetails = async () => {

        await axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/workoutLog'
        }).then((response) => {
            setWorkoutData(response.data)
            console.log(workoutData)
            setDate(new Date(workoutData[0].startDate))
            setMonth(date.getMonth())
            console.log(month)
        }).catch((error) => {
            console.log(error.message)
        })
    }


    const pageLoad = () => {
        getWorkoutDetails();
    }

    useEffect(() => { 
        pageLoad();
    },[])

    return (
        <>
        <div><Header /></div>
        <Flex h='4750px' justify='center' align='center'>

            <Flex justify='center' h='1500px' w='2000px' flexDir='column' align='center'>
                <Card w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Milage by Month</Heading>

                        <Box h='1200px' w='1200px' mt='50px' mb='25px'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={workoutData}
                                    margin={{
                                        right: 30,
                                    }}>

                                    <CartesianGrid stroke="#eee" strokeDasharray='3 3' />
                                    <XAxis dataKey='startDateMonth'></XAxis>
                                    <YAxis />
                                    <Tooltip content='' />
                                    <Legend />
                                    <Bar dataKey='distance' fill='#54D3B2' />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

                <Card mt='50px' w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Milage by Month</Heading>

                        <Box h='1200px' w='1200px' mt='50px' mb='25px'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={workoutData}
                                    margin={{
                                        right: 30,
                                    }}>

                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='startDateMonth'></XAxis>
                                    <YAxis />
                                    <Tooltip content='' />
                                    <Legend />
                                    <Bar dataKey='distance' fill='#54D3B2' />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

                <Card mt='50px' w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Milage by Month</Heading>

                        <Box h='1200px' w='1200px' mt='50px' mb='25px'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={workoutData}
                                    margin={{
                                        right: 30,
                                    }}>

                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='startDateMonth'></XAxis>
                                    <YAxis />
                                    <Tooltip content='' />
                                    <Legend />
                                    <Bar dataKey='distance' fill='#54D3B2' />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

            </Flex>

        </Flex>
        </>
    )
}

export default Charts