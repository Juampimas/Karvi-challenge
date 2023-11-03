import { useState } from "react"
import productos from "../mocks/productos.json"

import DropDownItem from "./DropDown"

import filtros_icon from "../assets/flitros_icon.svg"
import type { Categorias } from "../types/interfaces"
import "../sass/Filtros.scss"


function Filtros({tags, setTags}:Categorias) {


  const [showFilters, setShowFilters] = useState(false)

  return (
    <aside>
      <div className="filter_buttons_container">        
        <div onClick={() => {setShowFilters(!showFilters)}} className="filter_name">
            <img src={filtros_icon} alt="icono filtros" />
            <span>Filtrar</span>
        </div>
      </div>
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