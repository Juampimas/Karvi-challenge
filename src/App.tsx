import { useState, useEffect } from "react"

import Filtros from './components/Filtros';
import Busqueda from './components/Busqueda';
import Sections from './components/Sections';
import Loader from "./components/Loader";

import type { Producto } from "./types/interfaces";
import './App.scss'



function App() {

  const [primer, setPrimer] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://mocki.io/v1/80669021-108d-40c2-9bc9-887a5184b700")
    .then(res => res.json())
    .then(data => setPrimer(data.items))
    .finally(()=>setLoading(false))
  },[])
  
  const [autos, setAutos] = useState<Array<Producto>>(primer)

  const [tags, setTags] = useState([])
  const [grid, setGrid] = useState(true)
    

  return (
    <main>   
      {
        loading 
        ? 
        <Loader /> 
        :
        <>
          <Filtros 
            tags={tags} 
            setTags={setTags} />
          <section>
            <Busqueda 
              autos={autos} 
              tags={tags} 
              setTags={setTags} 
              setAutos={setAutos} 
              grid={grid} 
              setGrid={setGrid} 
              initialCars={primer}/>
            <Sections 
              autosFiltrados={autos} 
              grid={grid} 
              setGrid={setGrid} />
          </section>
        </>
      }
    </main>
  )
}

export default App
