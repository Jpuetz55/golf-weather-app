import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Calendar from '../components/Calendar'
import moment from 'moment'
import queryString from 'query-string'
import React from 'react'

function Home( { weather } ) {
  return (
    <>
    <Calendar data={weather}/>
    </>
  )
    
}
export async function getServerSideProps() {
    // Send a GET request to the specified endpoint
   // get your key from app.tomorrow.io/development/keys
   const apikey = "KDY75kl3GNk9qv32n5pNGpMsSNqiYCKm";
   const baseURL = "https://api.tomorrow.io/v4/timelines"

   // pick the location, as a latlong pair
   let location = [38.8403, 97.6114];

   // list the fields
   const fields = [
   //"sunriseTime",
   //"sunsetTime",
   //"rainAccumulation",
   "precipitationType",
   "precipitationProbability",
   //"dewPoint",  
   //"rainIntensity",
   //"pressureSurfaceLevel",
   //"humidity",
   //"precipitationIntensity",
   //"precipitationType",
   "windSpeed",
   "windGust",
   //"windDirection",
   //"temperature",
   "temperatureApparent",
   //"cloudCover",
   //"cloudBase",
   //"cloudCeiling",
   //"weatherCode",
   ];

   // choose the unit system, either metric or imperial
   const units = "imperial";

   // set the timesteps, like "current", "1h" and "1d"
   const timesteps = ["1d"];

   // configure the time frame up to 6 hours back and 15 days out
   const now = moment.utc();
   const startTime = moment.utc(now).add(0, "minutes").toISOString();
   const endTime = moment.utc(now).add(13, "days").toISOString();

   // specify the timezone, using standard IANA timezone format
   const timezone = "America/New_York";

   // request the timelines with all the query string parameters as options
   const getTimelineParameters =  queryString.stringify({
       location,
       fields,
       units,
       timesteps,
       startTime,
       endTime,
       timezone,
   }, {arrayFormat: "comma"});   

   const res = await fetch(baseURL + "?" + getTimelineParameters + `&apikey=${apikey}`, {method: "GET"})
   const data = await res.json()
   console.log(data)
  return {
    props: {
      weather: data,
    },
  }
}

export default Home;
