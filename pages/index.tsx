import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Calendar from '../components/Calendar'
import moment from 'moment'
import queryString, { stringify } from 'query-string'
import React from 'react'

function Home( { weather } ) {
  return (
    <>
    <Calendar data={weather}/>
    </>
  )

  // Send a GET request to the specified endpoint
    
}
export async function getServerSideProps() {

  const params = [
  "temperature_2m",
  "relativehumidity_2m",
  "dewpoint_2m",
  "apparent_temperature",
  "pressure_msl",
  "surface_pressure",
  "precipitation,windspeed_10m",
  "windspeed_80m",
  "soil_temperature_0_to_10cm"

  ];

  const baseURL = "https://api.open-meteo.com/v1/gfs?latitude=38.8403&longitude=97.6114&hourly="
  const res = await fetch(baseURL + params.join(","), {method: "GET"});
  const data = await res.json();
  console.log(data);
   
  return {
    props: {
      weather: data,
    },
  }
}

export default Home;


