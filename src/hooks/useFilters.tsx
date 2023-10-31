import { useContext } from "react"
import { FiltersContext } from "../context/filters"

  interface Prod {
  items: Array<{
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
  
interface Filtraje {
    filters:{
        brand: string,
        model:string,
        version:string,
        city:string,
        year:number
    },
    setFilters: string
}



export function useFilters(){
  
    // const [filter, setFilter] = useState({
    //   category:"all",
    //   minPrice:0
    // })

    const {filters, setFilters}:Filtraje = useContext(FiltersContext)
     
    function filteredProducts({items}:Prod){
       return items.filter(producto => {
        return ( 
          ( filters.brand === "all" || 
          producto.brand === filters.brand && 
          producto.city === filters.city &&
          producto.version === filters.version &&
          producto.brand === filters.brand
          ))
        })
      }
      
      
      return {filteredProducts, setFilters}
    }

