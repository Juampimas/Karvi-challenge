import "../sass/Filtros.scss"
import DropDownItem from "./DropDown"
import productos from "../mocks/productos.json"

interface Categorias {
  tags:Array<string | number>,
  setTags: (tags: Array<string | number>) => void
}

function Filtros({tags, setTags}:Categorias) {

  return (
    <aside>
        <ul>
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