import { useState, createContext, useEffect } from "react";

const CountdownContext = createContext(null)

const CountdownProvider = ({children}) => {
  const [event, setEvent] = useState(null)
  
  return(
    <CountdownContext.Provider value={{event, setEvent}}>
      {children}
    </CountdownContext.Provider>
  )
}

export {CountdownProvider, CountdownContext}