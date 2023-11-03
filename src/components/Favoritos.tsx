import {useEffect, useState} from "react"
import "../sass/ListaDeProductos.scss"

import Paginacion from "./Paginacion"
import { Autos } from "../types/interfaces"
import RenderFavs from "./RenderFavs"
import { usePages } from "../hooks/usePages"


function Favoritos({autosFiltrados, grid, favorito, setFavorito, autosQt, currentPage, setCurrentPage}:Autos) {

    useEffect(() => {    
      ElFiltro()
    },[favorito])

    const {indexIni,indexFin,numPages} = usePages({currentPage, autosQt, autosFiltrados})
  

    const [nuevosAutos, setNuevosAutos] = useState([])

    function ElFiltro(){
        autosFiltrados.forEach((auto) => {
            if(favorito.includes(auto.id)){
                setNuevosAutos(prevState=>[...prevState, auto])
            }
        })        
    }


  return (
    <div className="card-container">
        <RenderFavs 
          nuevosAutos={nuevosAutos} 
          grid={grid} 
          indexIni={indexIni} 
          indexFin={indexFin} 
          favorito={favorito} 
          setFavorito={setFavorito} 
          setNuevosAutos={setNuevosAutos}/>
        <Paginacion 
          setPage={setCurrentPage} 
          numPages={numPages} 
          currPage={currentPage} 
        />
    </div>
  )
}

export default Favoritos