import { useState } from "react"
import "../sass/Sections.scss"
import ListaDeProductos from "./ListaDeProductos"
import Favoritos from "./Favoritos"

interface Autos {
    autosFiltrados: Array<{
      id: number,
      brand: string,
      model: string, 
      version: string,
      year: string,
      city: string,
      price: number,
      mileage: number,
      state: string,
      image: string
    }>,
    grid:boolean, 
    setGrid: (grid: boolean) => void
  }

function Sections({autosFiltrados, grid, setGrid}:Autos) {

    const [allCars, setAllCars] = useState(true)
    const [favCars, setFavCars] = useState(false)
    const [favorito, setFavorito] = useState([])

    const [autosQt] = useState(12)
    const [currentPage, setCurrentPage] = useState(1)

    function AllProducts(){
        setAllCars(true)
        setFavCars(false)
    }
    function AllFavourites(){
        setAllCars(false)
        setFavCars(true)
    }

  return (
    <>
        <section className="fav_section">
            <button className={`fav_btn ${allCars ? "active" : "inactive"}`} onClick={() => {AllProducts()}}>Todos</button>
            <button className={`fav_btn ${favCars ? "active" : "inactive"}`} onClick={() => {AllFavourites()}}>Favoritos</button>
        </section>
        {allCars 
        ?
        <ListaDeProductos 
          autosFiltrados={autosFiltrados} 
          grid={grid} setGrid={setGrid} 
          favorito={favorito} 
          setFavorito={setFavorito} 
          autosQt={autosQt} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} />
        :
        <Favoritos 
          autosFiltrados={autosFiltrados} 
          grid={grid} setGrid={setGrid} 
          favorito={favorito} 
          setFavorito={setFavorito} 
          autosQt={autosQt} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} />
        }
    </>
  )
}

export default Sections