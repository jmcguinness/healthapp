import { Container, Card, CardHeader, Button, Text, Input, FormControl, Flex, CardBody, Link, Image } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { LuInfo } from "react-icons/lu"

function Weather () {

    const [location, setLocation] = useState("Fredericksburg");
    const [city, setCity] = useState("Fredericksburg")
    const [lat, setLat] = useState(38.3032);
    const [long, setLong] = useState(-77.4605);
    const [temp, setTemp] = useState();
    const [dewPoint, setDewPoint] = useState();
    const [feels, setFeels] = useState();
    const [sunrise, setSunrise] = useState();
    const [sunset, setSunset] = useState();
    const [high, setHigh] = useState();
    const [low, setLow] = useState();
    const [weatherCode, setWeatherCode] = useState('False');
    const [message, setMessage] = useState('False');
    const [forecastHigh, setForecastHigh] = useState();
    const [forecastLow, setForecastLow] = useState();
    const [forecastWeatherCode, setForecastWeatherCode] = useState();
    const [forecastDay, setForecastDay] = useState();
    const [toggle, setToggle] = useState(false);
    const [currentWeatherPage, setCurrentWeatherPage] = useState('True')
    const [forecastPage, setForecastPage] = useState('False')
    const [weatherImage, setWeatherImage] = useState()

    
    const url_weather = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,dew_point_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1`;
    const url_coord = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`;
    const url_weather_forcast = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit`;
     
    
    {/*Get the coordinates for a city*/}
    const coordFetch = async () => {

        setCity(location)
        const result = await fetch(url_coord)
        const new_coord = await result.json()
        const latitude = new_coord.results[0].latitude
        setLat(latitude)
        const longitude = new_coord.results[0].longitude
        setLong(longitude)

        fetchWeather();
        fetchForecast();
        
        
    }

    useEffect(() => {
        coordFetch();
    }, [])

    const fetchForecast = async () => {

        const dataForecast = await fetch(url_weather_forcast);
        const new_weather_forecast = await dataForecast.json();
        console.log(new_weather_forecast)

        setForecastHigh(new_weather_forecast.daily.temperature_2m_max)
        setForecastLow(new_weather_forecast.daily.temperature_2m_min)
        setForecastWeatherCode(new_weather_forecast.daily.weather_code)
        setForecastDay(new_weather_forecast.daily.time)

        console.log(forecastHigh)
        console.log(forecastLow)

    }

    const addWeatherImage = () => {

        setWeatherImage(
            <Image
                mb='25px'
                w='600px'
                h='450px'
                src='..\src\assets\frontdoor.jpeg'
                fallbackSrc='https://via.placeholder.com/750'
                alt='Go outside'
            />
        )
    }
    
    const fetchWeather = async () => {

        const data = await fetch(url_weather);
        const new_weather = await data.json();
        console.log(new_weather)

        
        setTemp(new_weather.current.temperature_2m) 
        setFeels(new_weather.current.apparent_temperature)
        setDewPoint(new_weather.current.dew_point_2m)
        setSunrise(new_weather.daily.sunrise)
        setSunset(new_weather.daily.sunset)
        setHigh(new_weather.daily.temperature_2m_max)
        setLow(new_weather.daily.temperature_2m_min)
        setWeatherCode(new_weather.current.weather_code)


        console.log(message)

        if (new_weather.current.weather_code === 0) {
            setWeatherCode('Sun')
        } else if (new_weather.current.weather_code in [1,2,3]) {
            setWeatherCode('Partly Sunny')
        } else if (new_weather.current.weather_code in [45, 48]) {
            setWeatherCode('Hazy')
        } else if (new_weather.current.weather_code in [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]) {
            setWeatherCode('Rain')
        } else if (new_weather.current.weather_code in [95, 96, 99]) {
            setWeatherCode('Thunder Storm')
        } else if (new_weather.current.weather_code in [71, 73, 75, 77, 85, 86]) {
            setWeatherCode('❄️')
        } else {
            setWeatherCode('')
        }

        if (temp >= 100) {
            setMessage(<Link href="https://www.google.com/search?client=firefox-b-1-d&channel=entpr&q=fun+things+to+do+inside">Have a look</Link>)
        } else if (dewPoint >= 70) {
            setMessage("It's a sauna out there")
        } else if (temp >= 80) {
            setMessage("Maybe find a treadmill")
        } else if (temp >= 70) {
            setMessage("A little warm, but not so bad")
        } else if (temp >= 50 & temp <70) {
            setMessage("It's so nice, a run might actually feel good")
        } else if (temp >= 35 & temp <50) {
            setMessage("Don't forget your sweater!")
        } else if (temp < 35) {
            setMessage("Might want to do some " + <Link href="https://my.clevelandclinic.org/health/diseases/15439-frostbite">reading</Link> )
        }


    }


    {/*const handleToggle = () => {
        setToggle(!toggle)
    }*/}

    const pageLoad = () => {
        coordFetch()
    }

    useEffect(() => { 
        pageLoad();
    },[])

    if (weatherCode != "False" & message != "False" & currentWeatherPage=='True') {
        return (
            <Card h='1250px' w='800px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='' bgColor='rgb(24, 112, 200)'>
                <>

                    <CardHeader mt='65px' fontSize='75px' color='#54D3B2' fontWeight='bold' textShadow='3px 2px 2px rgb(22, 6, 86)'>{city}</CardHeader>

                    <CardBody justify='center'>

                        <Text color='white' fontSize='35px' mb='30px'>{message}</Text>
                        <Text color='white' fontSize='60px' textShadow='3px 2px 2px rgb(22, 6, 86)'>{temp}</Text>
                        <Text fontSize='100px'>{weatherCode=="Sun" ? ("🌞") : weatherCode =="Partly Sunny" ? ("⛅") : weatherCode=="Hazy" ? ("🌫️") : weatherCode=="Rain" ? ("🌧️") : weatherCode =="Thunder Storm" ? ("⛈️") : weatherCode=="Snow" ? ("❄️") : ("🌵")}</Text>

                        <Flex justify='center' mt='25px'>
                            <Text color='blue.900' fontSize='42.5px' mr='15px'>High</Text>
                            <Text color='white' fontSize='40px' mr='20px'>{high}</Text>
                            <Text color='blue.900' fontSize='42.5px' ml='20px'>Low</Text>
                            <Text color='white' fontSize='40px' ml='15px'>{low}</Text>
                        </Flex>

                        <Flex justify='center' mt='25px'>
                            <Text color='blue.900' fontSize='42.5px' mb='5px'>Sunrise 🌅</Text>
                        </Flex>

                        <Flex justify='center'>
                            <Text color='white' fontSize='40px' mb='5px'>{sunrise}</Text>
                        </Flex>

                        <Flex justify='center'>
                            <Text color='blue.900' fontSize='42.5px' mb='5px'>Sunset 🌇</Text>
                        </Flex>

                        <Flex justify='center'>
                            <Text color='white' fontSize='40px' mb='5px'>{sunset}</Text>
                        </Flex>

                        <Button mt='50px' backgroundColor='#54D3B2' h='100px' w='250px' color='blue.900' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='white'>Forecast</Button>

                    </CardBody>
                </>
            </Card>
        )
    } else if (forecastPage == 'True') {

        return (
            <Card h='1250px' w='800px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='' bgColor='rgb(24, 112, 200)'>
                <>

                    <CardHeader mt='65px' fontSize='75px' color='#54D3B2' fontWeight='bold' textShadow='3px 2px 2px rgb(22, 6, 86)'>{city}</CardHeader>

                    <CardBody justify='center'>

                        
                            <Flex justify='center'>
                                <Text color='white' fontSize='45px' mb='10px'>{forecastDay[0]}</Text>
                            </Flex>
                            <Flex justify='center'>
                                <Text color='blue.900' fontSize='35px' mr='7px'>High</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px' mr='7px'>{forecastHigh[0]}</Text>
                                <Text color='blue.900' fontSize='35px' ml='7px' mr='7px'>Low</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px'>{forecastLow[0]}</Text>
                            </Flex>
                        
                            <Flex justify='center'>
                                <Text color='white' fontSize='45px' mb='10px' mt='10px'>{forecastDay[1]}</Text>
                            </Flex>

                            <Flex justify='center'>
                                <Text color='blue.900' fontSize='35px' mr='7px'>High</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px' mr='7px'>{forecastHigh[1]}</Text>
                                <Text color='blue.900' fontSize='35px' ml='7px' mr='7px'>Low</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px'>{forecastLow[1]}</Text>
                            </Flex>

                            <Flex justify='center'>
                                <Text color='white' fontSize='45px' mb='10px' mt='10px'>{forecastDay[2]}</Text>
                            </Flex>

                            <Flex justify='center'>
                                <Text color='blue.900' fontSize='35px' mr='7px'>High</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px' mr='7px'>{forecastHigh[2]}</Text>
                                <Text color='blue.900' fontSize='35px' ml='7px' mr='7px'>Low</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px'>{forecastLow[2]}</Text>
                            </Flex>

                            <Flex justify='center'>
                                <Text color='white' fontSize='45px' mb='10px' mt='10px'>{forecastDay[3]}</Text>
                            </Flex>

                            <Flex justify='center'>
                                <Text color='blue.900' fontSize='35px' mr='7px'>High</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px' mr='7px'>{forecastHigh[3]}</Text>
                                <Text color='blue.900' fontSize='35px' ml='7px' mr='7px'>Low</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px'>{forecastLow[3]}</Text>
                            </Flex>

                            <Flex justify='center'>
                                <Text color='white' fontSize='45px' mb='10px' mt='10px'>{forecastDay[4]}</Text>
                            </Flex>

                            <Flex justify='center' mb='10px'>
                                <Text color='blue.900' fontSize='35px' mr='7px'>High</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px' mr='7px'>{forecastHigh[4]}</Text>
                                <Text color='blue.900' fontSize='35px' ml='7px' mr='7px'>Low</Text>
                                <Text color='#54D3B2' fontSize='35px' ml='7px'>{forecastLow[4]}</Text>
                            </Flex>

                        <Button mt='50px' backgroundColor='#54D3B2' h='100px' w='250px' color='blue.900' fontSize='40px' fontFamily='Roboto'  variant='outline' borderWidth='1px' borderColor='white'>Today</Button>

                    </CardBody>
                </>
            </Card>
        )

    } else {

        return (
            <Card h='1250px' w='800px' boxShadow='lg' borderStyle='solid' borderWidth='5px' borderColor='' bgColor='rgb(24, 112, 200)'>
                <>

                    <CardHeader mt='65px' fontSize='75px' color='#54D3B2' fontWeight='bold' textShadow='3px 2px 2px rgb(22, 6, 86)'>(╯°□°）╯︵ ┻━┻</CardHeader>

                    <CardBody justify='center'>

                        
                            <Flex justify='center'>
                                <Text color='white' fontSize='45px' mb='10px'>Weather failed to load 😥</Text>
                            </Flex>

                            <Flex justify='center' mt='25px'>
                                <Text color='blue.900' fontSize='35px' mb='10px' ml='25px' mr='25px'>Looks like you'll have to check the old fashioned way <Button size="xs" bgColor='rgb(24, 112, 200)' w='50px' h='50px' onClick={addWeatherImage}>
                                <LuInfo color='#54D3B2' size='l'/>
                                </Button></Text>
                            </Flex>

                            <Flex justify='center' mt='25px'>
                                {weatherImage}
                            </Flex>
                            

                    </CardBody>
                </>
            </Card>

        )

    }
}

export default Weather