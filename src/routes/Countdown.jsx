import React, { useContext } from 'react'
import { CountdownContext } from '../context/CountdownContext'
import useCountdown from '../hooks/useCountdown'
import Counter from '../components/Counter'
import { Navigate, useNavigate } from "react-router-dom";

import './Countdown.css'

const Countdown = () => {
  const {event, setEvent} = useContext(CountdownContext)

  if (!event)  <Navigate to="/" replace />;

  const [day, hour, minute, second] = useCountdown(event.date);

  const navigate = useNavigate();

  const handleNew = () =>{
    localStorage.removeItem("event")
    navigate("/");
  }

  return (
    <div className='countdown-container'>
      <Counter title="day" number={day}/>
      <Counter title="hour" number={hour}/>
      <Counter title="minute" number={minute}/>
      <Counter title="second" number={second}/>
      <button onClick={handleNew}>Criar nova contagem</button>
    </div>
  )
}

export default Countdown