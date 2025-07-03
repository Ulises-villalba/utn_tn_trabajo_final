import React from 'react'
import { useState } from 'react'
import {Routes, Route} from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'

function App() {

  const [tareas , setTareas] = useState([
    'Tarea 1',
    'Tarea 2',
    'Tarea 3'
  ])




const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
    } 

  function decrementar() {
      setContador(contador - 1)
    }
    
return (
  <>
    <div>
      <Routes>
        <Route
        path= '/home'
        element= {<HomeScreen/>}
        />
        <Route
        path= '/contacts'
        element= {<ContactScreen/>}
        />
        <Route
        path= '/contact-detail'
        element= {<ContactDetailScreen/>}
        />
      </Routes>
    </div>
    
    <div>
      <button onClick = {decrementar}>-</button>
      <span> {contador} </span>
      <button onClick = {incrementar}>+</button>
    </div>

    {tareas.map((tareas, index) =>(
      <div key={index}>
        <p>{tareas}</p>
        <button>Eliminar</button>
        <hr/>
      </div>
    ))}
  </>
)



}

export default App
