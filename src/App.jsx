import { useState, useEffect } from 'react'
import './App.css'
import {headers} from "./components/headers"
import {MovieCarde} from "./components/MovieCarde"

const FILMES_INICIAS =[
  {id: 1, titulo: "interestrelar", genero: "ficção", emoji: "😒", favorito: false},
  {id: 2, titulo: "O batman", genero: "herotico", emoji: "😒", favorito: false},
  {id: 3, titulo: "O miranha", genero: "Herotico", emoji: "😒", favorito: false},
  {id: 4, titulo: "um negao", genero: "estudos", emoji: "😒", favorito: false}
]

function App() {
  return (
    <>
      <h1>Helo tiririca</h1>
    </>
  )
}

export default App