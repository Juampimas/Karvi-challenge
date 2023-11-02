import "../sass/Filtros.scss"
import DropDownItem from "./DropDown"
import productos from "../mocks/productos.json"
import filtros_icon from "../assets/flitros_icon.svg"
import search_icon from "../assets/search_icon.svg"
import { useState, /*useEffect, useRef*/ } from "react"

interface Categorias {
  tags:Array<string | number>,
  setTags: (tags: Array<string | number>) => void
}

// function useSearch(){
//   const [error, setError] = useState(null)
//   const [search, updateSearch] = useState("")
//   const isFirstInput = useRef(true)

//   useEffect(() => {
    
//     if (isFirstInput.current) {
//       isFirstInput.current = search === ""
//       return
//     }
//     if (search === "") {
//       setError("No se puede buscar una auto con el campo")
//       return
//     }
//     if (search.match(/^\d+$/)) {
//       setError("No se puede buscar autos con un numero")
//       return
//     }
//     if (search.length < 3) {
//       setError("La busqueda debe tener al menos 3 caracteres")
//       return
//     }
  
//     setError(null)

//   }, [search])

//   return {search, error, updateSearch}
// }

function Filtros({tags, setTags}:Categorias) {


  // const {search, updateSearch, error} = useSearch()

  const [showFilters, setShowFilters] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <aside>
      <div className="filter_buttons_container">        
        <div onClick={() => {setShowSearch(!showSearch)}} className="filter_name">
            <img src={search_icon} alt="icono filtros" />
            <span>Buscar</span>
        </div>
        <div onClick={() => {setShowFilters(!showFilters)}} className="filter_name">
            <img src={filtros_icon} alt="icono filtros" />
            <span>Filtrar</span>
        </div>
      </div>
        <form className={`show-search ${showSearch ? "active" : "inactive"}`}>
          <input className='search-bar' type="text" placeholder='Buscar...'/>
          <button type="submit" >Buscar</button>
        </form>
        <ul className={`show-filters ${showFilters ? "active" : "inactive"}`}>
            <DropDownItem title="Marca" subFilter={productos.availableFilters.brand} tags={tags} setTags={setTags}/>
            <DropDownItem title="Modelo" subFilter={productos.availableFilters.model} tags={tags} setTags={setTags}/>
            <DropDownItem title="Año" yearFilter={productos.availableFilters.year} tags={tags} setTags={setTags}/>
            <DropDownItem title="Version" subFilter={productos.availableFilters.version} tags={tags} setTags={setTags}/>
            <DropDownItem title="Ciudad" subFilter={productos.availableFilters.city} tags={tags} setTags={setTags}/>
        </ul>
    </aside>
  )
}





export default Filtros;