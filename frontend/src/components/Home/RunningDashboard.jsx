import { Box, Flex, Card, CardHeader, Container, Heading, Stat, StatNumber, StatGroup, StatLabel, StatHelpText, StatArrow, Spacer, Slider, CardBody, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Polyline } from 'https://cdn.esm.sh/react-leaflet/Polyline'
import "leaflet/dist/leaflet.css"

function RunningDashboard () {

    const [workoutData, setWorkoutData] = useState();
    const [request, setRequest] = useState();
    const [prevRunMilage, setPrevRunMilage] = useState();
    const [prevRunTime, setPrevRunTime] = useState();
    const [longestRun, setLongestRun] = useState();

    const [button1Color, setButton1Color] = useState('gray')
    const [button1Border, setButton1Border] = useState('#54D3B2')
    const [button2Color, setButton2Color] = useState('#54D3B2')
    const [button2Border, setButton2Border] = useState('white')
    const [button3Color, setButton3Color] = useState('#54D3B2')
    const [button3Border, setButton3Border] = useState('white')
    const [page1, setPage1] = useState('True')
    const [page2, setPage2] = useState('False')
    const [page3, setPage3] = useState('False')

    const button1Click = () => {

        setButton1Color('gray')
        setButton1Border('#54D3B2')
        setButton2Color('#54D3B2')
        setButton2Border('white')
        setButton3Color('#54D3B2')
        setButton3Border('white')

        setPage1('True')
        setPage2('False')
        setPage3('False')

    }

    const button2Click = () => {

        setButton2Color('gray')
        setButton2Border('#54D3B2')
        setButton1Color('#54D3B2')
        setButton1Border('white')
        setButton3Color('#54D3B2')
        setButton3Border('white')

        setPage2('True')
        setPage1('False')
        setPage3('False')

    }

    const button3Click = () => {

        setButton3Color('gray')
        setButton3Border('#54D3B2')
        setButton2Color('#54D3B2')
        setButton2Border('white')
        setButton1Color('#54D3B2')
        setButton1Border('white')

        setPage3('True')
        setPage2('False')
        setPage1('False')

    }

    const position = [51.505, -0.09]

    var latlngs = [
        [38.26, -77.47],
        [38.24, -77.43],
        [38.26, -77.47]
    ];

    var polyline = L.polyline(latlngs, {color: 'blue', weight: 3})

    
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

    if(page1=='True') {
    return (
         <>

         <Card align='center' h='1250px' w='1800px' bgColor='#000014' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' ml='100px' mr='100px'>

            <CardHeader mt='25px' fontSize='75px' w='800px' color='#54D3B2' fontWeight='bold' textShadow='3px 2px 2px rgb(24, 112, 200)' mb='20px'>Lifting Stats</CardHeader>

            <CardBody h='500px'>

                <Flex justify='center' color='white' mb='40px'>
                    <Heading>Most Recent Lift</Heading>
                </Flex>

                <Flex>

                    <Stat ml='100px' w='400px' borderStyle='solid' borderWidth='1px' borderColor='gray' mr='25px' mb='25px'>
                        <CardHeader mt='25px' fontSize='35px' color='#54D3B2' fontWeight='bold' padding='0px'>Bench Press</CardHeader>
                        <StatNumber fontSize='125px' color='rgb(24, 112, 200)' fontWeight='bold'>205</StatNumber>
                        <StatHelpText fontSize='25px' color='blue.800' fontWeight='bold' mb='25px'>Daily Activities</StatHelpText>
                    </Stat>

                    <Stat mr='100px' w='400px' borderStyle='solid' borderWidth='1px' borderColor='gray' ml='25px' mb='25px'>
                        <CardHeader mt='25px' fontSize='35px' color='#54D3B2' fontWeight='bold' padding='0px'>Shoulder Press</CardHeader>
                        <StatNumber fontSize='125px' color='rgb(24, 112, 200)' fontWeight='bold'>130</StatNumber>
                        <StatHelpText fontSize='25px' color='blue.800' fontWeight='bold' mb='25px'>Daily Activities</StatHelpText>
                    </Stat>

                </Flex>

                <Flex>

                    <Stat ml='100px' borderStyle='solid' borderWidth='1px' borderColor='gray' mr='25px' mt='25px'>
                        <CardHeader mt='25px' fontSize='35px' color='#54D3B2' fontWeight='bold' padding='0px'>Squat</CardHeader>
                        <StatNumber fontSize='125px' color='rgb(24, 112, 200)' fontWeight='bold'>235</StatNumber>
                        <StatHelpText fontSize='25px' color='blue.800' fontWeight='bold' mb='25px'>Daily Activities</StatHelpText>
                    </Stat>

                    <Stat mr='100px' borderStyle='solid' borderWidth='1px' borderColor='gray' ml='25px' mt='25px'>
                        <CardHeader mt='25px' fontSize='35px' color='#54D3B2' fontWeight='bold' padding='0px'>Deadlift</CardHeader>
                        <StatNumber fontSize='125px' color='rgb(24, 112, 200)' fontWeight='bold'>165</StatNumber>
                        <StatHelpText fontSize='25px' color='blue.800' fontWeight='bold' mb='25px'>Daily Activities</StatHelpText>
                    </Stat>

                </Flex>

            </CardBody>

            <Flex>

            <Button backgroundColor={button1Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button1Border} mb='100px' mr='25px' ml='25px' onClick={button1Click}></Button>

            <Button backgroundColor={button2Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button2Border} mb='100px' mr='25px' ml='25px' onClick={button2Click}></Button>

            <Button backgroundColor={button3Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button3Border} mb='100px' mr='25px' ml='25px' onClick={button3Click}></Button>

            </Flex>

        </Card>  

        </>

    )} else if(page2=='True') {

        return (
            <>
   
            <Card align='center' h='1250px' w='1800px' bgColor='#000014' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' ml='100px' mr='100px'>
   
               <CardHeader mt='25px' fontSize='75px' w='800px' color='#54D3B2' fontWeight='bold' textShadow='3px 2px 2px rgb(24, 112, 200)' mb='25px'>Running Stats</CardHeader>
   
               <CardBody h='500px'>

               <Flex justify='center' color='white' mb='40px'>
                    <Heading>Past 30 Days</Heading>
                </Flex>

                    <Flex>

                        <Stat ml='100px' w='400px' borderStyle='solid' borderWidth='1px' borderColor='gray' mr='25px' mb='25px'>
                            <CardHeader mt='25px' fontSize='35px' color='#54D3B2' fontWeight='bold' padding='0px'>Number of Runs</CardHeader>
                            <StatNumber fontSize='125px' color='rgb(24, 112, 200)' fontWeight='bold'>4</StatNumber>
                            <StatHelpText fontSize='25px' color='blue.800' fontWeight='bold' mb='25px'>Daily Activities</StatHelpText>
                        </Stat>

                        <Stat mr='100px' w='400px' borderStyle='solid' borderWidth='1px' borderColor='gray' ml='25px' mb='25px'>
                            <CardHeader mt='25px' fontSize='35px' color='#54D3B2' fontWeight='bold' padding='0px'>Average Pace</CardHeader>
                            <StatNumber fontSize='125px' color='rgb(24, 112, 200)' fontWeight='bold'>9:38</StatNumber>
                            <StatHelpText fontSize='25px' color='blue.800' fontWeight='bold' mb='25px'>Daily Activities</StatHelpText>
                        </Stat>

                        </Flex>

                        <Flex>

                        <Stat ml='100px' borderStyle='solid' borderWidth='1px' borderColor='gray' mr='25px' mt='25px'>
                            <CardHeader mt='25px' fontSize='35px' color='#54D3B2' fontWeight='bold' padding='0px'>Miles Run</CardHeader>
                            <StatNumber fontSize='125px' color='rgb(24, 112, 200)' fontWeight='bold'>14</StatNumber>
                            <StatHelpText fontSize='25px' color='blue.800' fontWeight='bold' mb='25px'>Daily Activities</StatHelpText>
                        </Stat>

                        <Stat mr='100px' borderStyle='solid' borderWidth='1px' borderColor='gray' ml='25px' mt='25px'>
                            <CardHeader mt='25px' fontSize='35px' color='#54D3B2' fontWeight='bold' padding='0px'>Fastest Mile</CardHeader>
                            <StatNumber fontSize='125px' color='rgb(24, 112, 200)' fontWeight='bold'>8:17</StatNumber>
                            <StatHelpText fontSize='25px' color='blue.800' fontWeight='bold' mb='25px'>Daily Activities</StatHelpText>
                        </Stat>

                    </Flex>
   
               </CardBody>
   
               <Flex>
   
               <Button backgroundColor={button1Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button1Border} mb='100px' mr='25px' ml='25px' onClick={button1Click}></Button>
   
               <Button backgroundColor={button2Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button2Border} mb='100px' mr='25px' ml='25px' onClick={button2Click}></Button>
   
               <Button backgroundColor={button3Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button3Border} mb='100px' mr='25px' ml='25px' onClick={button3Click}></Button>
   
               </Flex>
   
           </Card>  

           </>
   
       )} else if(page3=='True') {

        return (
            <>
   
            <Card align='center' h='1250px' w='1800px' bgColor='#000014' borderStyle='solid' borderWidth='5px' borderColor='#54D3B2' ml='100px' mr='100px'>
   
               <CardHeader mt='25px' fontSize='75px' w='800px' color='#54D3B2' fontWeight='bold' textShadow='3px 2px 2px rgb(24, 112, 200)' mb='25px'>Run Map</CardHeader>




               <MapContainer center={[38.254, -77.462]} zoom={15} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[38.254, -77.462]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>





               <Flex>
   
               <Button backgroundColor={button1Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button1Border} mb='100px' mr='25px' ml='25px' onClick={button1Click}></Button>
   
               <Button backgroundColor={button2Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button2Border} mb='100px' mr='25px' ml='25px' onClick={button2Click}></Button>
   
               <Button backgroundColor={button3Color} h='50px' w='50px' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='2px' borderColor={button3Border} mb='100px' mr='25px' ml='25px' onClick={button3Click}></Button>
   
               </Flex>
   
           </Card>  

           </>
   
       )

       }
}

export default RunningDashboard