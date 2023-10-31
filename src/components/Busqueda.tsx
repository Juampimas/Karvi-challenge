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
      }>) => void
  }

function Busqueda({autos, tags, setTags, setAutos}:Busc) {

  return (
    <header>
        <div className="tags_container">
            <ul className="tags_list">

                {tags.map((tag) => (
                    <li className="filter_tag" key={tag}>
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
            <button className="grid_button">
                <img src={grid_icon} alt="icono grilla" />
            </button>
            <p>{autos.length} autos encontrados</p>
            <button className="sort_button" onClick={() => {setAutos(autos.sort((a,b) => a.price < b.price ? 1 : -1))}}>
                <img src={sort_icon} alt="icono orden" />
                <p>Mas Relevantes</p>
            </button>
        </div>
    </header>
  )
}

export default Busqueda