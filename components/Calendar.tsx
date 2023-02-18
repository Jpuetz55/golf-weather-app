import React, { useState } from 'react';


function Calendar({ data }) {
  //const values = (data.data.timelines[0].intervals.map((d) => d.values))
  const indexed = data.data.timelines[0].intervals.map((item, index) => Object.assign(item, { index }))
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  console.log(indexed)

  function chooseCellState(value){
    if (value.values.temperatureApparent < 60)
    {
      return 'calendarCellBad';
    }

    else {
      return 'calendarCellGood'
    }
  }

  return (
    <div className={'calendarContainer'}>
      <div className = {'calendar'}>     
        {indexed.map((value, index) => {
          return <div key={index} className={chooseCellState(value)}>
            <h1>{weekday[new Date(value.startTime).getDay()]} - {new Date(value.startTime).getDate()}</h1>
            <p>
              Precipitation Intensity = {value.values.precipitationIntensity}<br></br>
              Precipitation Type = {value.values.precipitationType}<br></br>
              Temperature Apparent = {value.values.temperatureApparent}<br></br>   
              Wind Speed = {value.values.windSpeed}<br></br></p>        
      </div>
    })} 
      </div>
    </div>
  )
  }

export default Calendar;