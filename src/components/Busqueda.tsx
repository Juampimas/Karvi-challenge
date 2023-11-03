import {useState, useEffect} from "react"

import cross from "../assets/tags_cross.svg"
import trash from "../assets/trash_bin.svg"
import grid_icon from "../assets/grid_icon.svg"
import sort_icon from "../assets/sort_icon.svg"

import type { Busqueda } from "../types/interfaces"
import { useSort } from "../hooks/useSort"
import "../sass/Busqueda.scss"



function Busqueda({autos, tags, setTags, setAutos, grid, setGrid, initialCars}:Busqueda) {
    
    useEffect(() => {
        filterCars()
    },[tags])

    const [sort, setSort] = useState(false)

    const {sortCars, filterCars} = useSort({sort, setAutos, autos, setSort, tags, initialCars})


  return (
    <header>
        <div className="tags_container">
            <ul className="tags_list">

                {tags.length === 0 
                ? 
                <p className="no-filters">No hay filtros seleccionados</p>
                :
                tags.map((tag) => (
                    <li className="filter_tag" key={crypto.randomUUID()}>
                        <p>{tag}</p>
                        <img onClick={() => {setTags(tags.filter(element => element !== tag))}} src={cross} alt="cruz borrar" />
                    </li>
                ))}

            </ul>
            <button onClick={() => {setTags([])}} className="delete_filters">
                <img src={trash} alt="icono basura" />
                <p>Limpiar Filtros</p>
            </button>
        </div>
        <div className="sort_container">
            <button onClick={() => {setGrid(!grid)}} className="grid_button">
                <img src={grid_icon} alt="icono grilla" />
            </button>
            <p>{autos.length} autos encontrados</p>
            <button className="sort_button" onClick={() => {sortCars()}}>
                <img src={sort_icon} alt="icono orden" />
                <p>Mas Relevantes</p>
            </button>
        </div>
    </header>
  )
}

export default Busqueda