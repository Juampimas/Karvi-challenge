import {useState, useEffect} from "react"
import "../sass/Busqueda.scss"
import cross from "../assets/tags_cross.svg"
import trash from "../assets/trash_bin.svg"
import grid_icon from "../assets/grid_icon.svg"
import sort_icon from "../assets/sort_icon.svg"

interface Busc {
    autos: Array<{
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
    tags:Array<string | number>,
    setTags: (tags: Array<string | number>) => void,
    setAutos: (autos: Array<{
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
      }>) => void,
      grid:boolean, 
      setGrid: (grid: boolean) => void,
      initialCars:Array<{
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
      }>
  }

function Busqueda({autos, tags, setTags, setAutos, grid, setGrid, initialCars}:Busc) {
    

    useEffect(() => {
        filterCars()
    },[tags])

    const [sort, setSort] = useState(false)

    function sortCars(){
        setSort(!sort)
        if(sort){
            setAutos([...autos].sort((a,b) => a.price > b.price ? 1 : -1))
        } else {
            setAutos([...autos].sort((a,b) => a.price < b.price ? 1 : -1))
        }
    }

    function filterCars(){
        const newCars = []
        if(tags.length > 0){
            tags.forEach(tag=>{
                autos.forEach(car => {
                    if(car.brand === tag || car.year.slice(5,9) === tag.toString() || car.version === tag || car.model === tag || car.city === tag || car.year.slice(0,4) === tag.toString()){
                        newCars.push(car)
                    } 
                })
            })
            setAutos([...newCars])
        } else if (tags.length === 0){
            setAutos(initialCars)
    }}


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