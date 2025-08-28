import { Flex, Heading, Card, CardBody, Box, Button } from '@chakra-ui/react'
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from "recharts";
import { useState, useEffect } from "react";
import Header from '../Header'
import axios from 'axios';


function Charts () {

    const [ workoutData, setWorkoutData ] = useState();
    const [ liftData, setLiftData ] = useState();
    const [ month, setMonth ] = useState();
    const [ date, setDate ] = useState();
    const [ chartType, setChartType ] = useState('Running');

    const runClick = () => {
        setChartType('Running')
    }

    const liftClick = () => {
        setChartType('Lifting')
    }

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

    const getLiftStats = async () => {

        await axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/liftingDashboard'
        }).then((response) => {
            console.log(response.data)
            setLiftData(response.data)
        })
    }


    const pageLoad = () => {
        getWorkoutDetails();
        getLiftStats();
    }

    useEffect(() => { 
        pageLoad();
    },[])

    if (chartType == "Running") {return (
        <>
        <div><Header /></div>
        <Box>
            <Button mt='100px' backgroundColor='#f9f9f9' h='100px' w='250px' color='#243b55' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='white' mr='35px' onClick={runClick}>Running</Button>
            <Button mt='100px' backgroundColor='#54D3B2' h='100px' w='250px' color='#243b55' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='white' ml='35px' onClick={liftClick}>Lifting</Button>
        </Box>
        <Flex h='4750px' justify='center' align='center'>

            <Flex justify='center' h='1500px' w='2000px' flexDir='column' align='center'>
                <Card w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Mileage by Month</Heading>

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
                                    <XAxis 
                                        dataKey='startDateMonth'
                                        name='Month'
                                        type='category'>
                                    </XAxis>
                                    <YAxis />
                                    <Tooltip content='' />
                                    <Legend />
                                    <Bar dataKey='distance' fill='#54D3B2' />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

                <Card mt='150px' w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Speed by Mile</Heading>

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
                                    <XAxis dataKey=''></XAxis>
                                    <YAxis />
                                    <Tooltip content='' />
                                    <Legend />
                                    <Bar dataKey='' fill='#54D3B2' />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

                <Card mt='150px' w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Popular Routes</Heading>

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
                                    <XAxis dataKey=''></XAxis>
                                    <YAxis />
                                    <Tooltip content='' />
                                    <Legend />
                                    <Bar dataKey='' fill='#54D3B2' />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

            </Flex>

        </Flex>
        </>
    )} else if (chartType == "Lifting") {return (
        <>
        <div><Header /></div>
        <Box>
            <Button mt='100px' backgroundColor='#54D3B2' h='100px' w='250px' color='#243b55' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='white' mr='35px' onClick={runClick}>Running</Button>
            <Button mt='100px' backgroundColor='#f9f9f9' h='100px' w='250px' color='#243b55' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='white' ml='35px' onClick={liftClick}>Lifting</Button>
        </Box>
        <Flex h='4750px' justify='center' align='center'>

            <Flex justify='center' h='1500px' w='2000px' flexDir='column' align='center' mt='1475px'>
                <Card w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Bench Stats</Heading>

                        <Box h='1200px' w='1200px' mt='50px' mb='25px'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={liftData}
                                    margin={{
                                        right: 30,
                                    }}>

                                    <CartesianGrid stroke="#eee" strokeDasharray='3 3' />
                                    <XAxis dataKey='updateDate'></XAxis>
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type='monotone' dataKey='bench' stoke='#54D3B2' />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

                <Card mt='150px' w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Overhead Press Stats</Heading>

                        <Box h='1200px' w='1200px' mt='50px' mb='25px'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={liftData}
                                    margin={{
                                        right: 30,
                                    }}>

                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='updateDate'></XAxis>
                                    <YAxis />
                                    <Tooltip content='' />
                                    <Legend />
                                    <Line type='monotone' dataKey='press' stoke='#54D3B2' />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

                <Card mt='150px' w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Squat Stats</Heading>

                        <Box h='1200px' w='1200px' mt='50px' mb='25px'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={liftData}
                                    margin={{
                                        right: 30,
                                    }}>

                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='updateDate'></XAxis>
                                    <YAxis />
                                    <Tooltip content='' />
                                    <Legend />
                                    <Line type='monotone' dataKey='squat' stoke='#54D3B2' />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

                <Card mt='150px' w='1500px' bgColor='#000014' borderStyle='solid' borderWidth='3px' borderColor='#54D3B2'>
                    <CardBody align='center' justify='center'>
                        <Heading color='#54D3B2' fontSize='50px' fontFamily='Roboto' mt='25px'>Deadlift Stats Stats</Heading>

                        <Box h='1200px' w='1200px' mt='50px' mb='25px'>
                            <ResponsiveContainer width='100%' height='100%'>
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={liftData}
                                        margin={{
                                            right: 30,
                                        }}>

                                        <CartesianGrid strokeDasharray='3 3' />
                                        <XAxis dataKey='updateDate'></XAxis>
                                        <YAxis />
                                        <Tooltip content='' />
                                        <Legend />
                                        <Line type='monotone' dataKey='deadlift' stoke='#54D3B2' />
                                    </LineChart>
                                </ResponsiveContainer>
                        </Box>

                    </CardBody>
                </Card>

            </Flex>

        </Flex>
        </>
    )}
}

export default Charts