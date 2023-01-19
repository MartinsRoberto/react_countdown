import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CountdownContext } from '../context/CountdownContext'
import './Home.css'

const Home = () => {
  const [title, setTitle] = useState()
  const [date, setDate] = useState()

  const navigate = useNavigate();

  const {event, setEvent} = useContext(CountdownContext)
  const handleSubmit = (e) => {
    e.preventDefault()

    const obj = { date, title}

    setEvent(obj)

    
    navigate("/countdown");

  }
  return (
    <div className="home-container">
      <h2>Crie uma contagem regressiva</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Digite aqui"/>
        </label>
        <label>
          <span>Data</span>
          <input type="date" onChange={(e) => setDate(e.target.value)} placeholder="31/12/2024"/>
        </label>
        <button type='submit'>Criar</button>
      </form>
    </div>
  )
}

export default Home