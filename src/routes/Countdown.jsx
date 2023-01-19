import React, { useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext'
import useCountdown from '../hooks/useCountdown'
import Counter from '../components/Counter'
import { Navigate } from "react-router-dom";

import './Countdown.css'

const Countdown = () => {
  const {event, setEvent} = useContext(CountdownContext)

  if (!event) return <Navigate to="/" replace />;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <div className='countdown-container'>
      <Counter title="day" number={day}/>
      <Counter title="hour" number={hour}/>
      <Counter title="minute" number={minute}/>
      <Counter title="second" number={second}/>
    </div>
  )
}

export default Countdown