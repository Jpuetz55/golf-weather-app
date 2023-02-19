import React, { useState } from 'react';


function Calendar({ data }) {

  return (
    <div className={'calendarContainer'}>
      <div className = {'calendar'}>     
        
      <>
      {JSON.stringify(data)}
      </>                              
      </div>        
    </div> 
  )  
  }
export default Calendar;