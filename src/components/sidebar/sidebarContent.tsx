import { Box, Heading, StackDivider, VStack } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { ILocation, IWeather } from "../../types/types";
import { Author } from "./author";
import { Location } from "./location";
import { Weather } from "./weather";

export const SidebarContent = () => {
    const [location, setLocation] = useState<ILocation>();
    const [weather, setWeather] = useState<IWeather>();

    useEffect(() => {
        handleApiCalls();
    }, [])

    const handleApiCalls = async () => {
        const handleFetchWeather = async (lat: string, long: string) => {
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OWM_API_KEY}&units=metric`
            try {
                const response = await fetch(api);
                const data = await response.json();
                const weather: IWeather = {
                    description: data.weather[0].description,
                    temp: data.main.temp,
                    icon: data.weather[0].icon,
                }
                setWeather(weather);
            } catch (e) {
                console.log(e)
            }
        }

        async function apiCall<T>(url: string): Promise<T> {
            try {
                const response = await fetch(url);
                return await response.json();
            }
            catch (error) {
                console.log(error);
            }
        }

        const locationApi = `https://api.freegeoip.app/json/?apikey=${process.env.REACT_APP_FGI_API_KEY}`
        const location = await apiCall<ILocation>(locationApi);
        setLocation(location);
        await handleFetchWeather(location.latitude, location.longitude);
    }

    return (
        <VStack overflowY="auto" divider={<StackDivider borderColor='gray.400'/>} spacing="7">
            <>
                <Heading as="h4" fontFamily="monospace" fontSize="3xl">
                    Location:
                </Heading>
                {
                    location ?
                        <Location city={location.city} latitude={location.latitude} longitude={location.longitude} />
                        :
                        <Loader
                            type="Oval"
                            color="#FEB2B2"
                            height={50}
                            width={50} />
                }
            </>
            <>
                <Heading as="h4" fontFamily="monospace" fontSize="3xl">
                    Weather:
                </Heading>
                {
                    weather ?
                        <Weather icon={weather.icon} temp={weather.temp} description={weather.description} />
                        :
                        <Loader
                            type="Oval"
                            color="#FEB2B2"
                            height={50}
                            width={50} />
                }
            </>
            <Author />
        </VStack>
    );
}
