import "../sass/ListaDeProductos.scss"
import Paginacion from "./Paginacion"
import {Autos} from "../types/interfaces"
import { usePages } from "../hooks/usePages"
import RenderAutos from "./RenderAutos"


function ListaDeProductos({autosFiltrados, grid, favorito, setFavorito, autosQt, currentPage, setCurrentPage}:Autos) {
  
  const {indexIni,numPages,indexFin} = usePages({currentPage, autosQt, autosFiltrados})

  return (
    <div className="card-container">
        <RenderAutos 
          autosFiltrados={autosFiltrados} 
          grid={grid} 
          indexIni={indexIni} 
          indexFin={indexFin} 
          favorito={favorito} 
          setFavorito={setFavorito} />
        <Paginacion 
          setPage={setCurrentPage} 
          numPages={numPages} 
          currPage={currentPage} 
        />
    </div>
  )
}

export default ListaDeProductos