import ListaDeProductos from './components/ListaDeProductos'
import productos from "./mocks/productos.json"
import { useState } from "react"
import './App.scss'
import Filtros from './components/Filtros';
import Busqueda from './components/Busqueda';
import { useFilters } from './hooks/useFilters';


const ESTADO_INICIAL = productos.items;
// const FILTROS_INICIAL = productos.availableFilters;



// interface Filters {
//   filtros: {
//     brand: Array<{
//       id:string,
//       name:string,
//       count:number
//     }>,
//     model: Array<{
//       id:string,
//       name:string,
//       count:number
//     }>,
//     version: Array<{
//       id:string,
//       name:string,
//       count:number
//     }>,
//     year: Array<{
//       id:string,
//       name:string,
//       count:number
//     }>,
//     city: Array<{
//       id:string,
//       name:string,
//       count:number
//     }>
//   }
// }
interface Producto {
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
}
// interface Prod {
//   items: Array<{
//     id: number,
//     brand: string,
//     model: string, 
//     version: string,
//     year: string,
//     city: string,
//     price: number,
//     mileage: number,
//     state: string,
//     image: string
//   }>
// }


function App() {
  

  const [autos, setAutos] = useState<Array<Producto>>(ESTADO_INICIAL)
  // const [filtros] = useState<Filters["filtros"]>(FILTROS_INICIAL)

    // const {filteredProducts} = useFilters();
    // const filterProducts = filteredProducts(productos)

    const [tags, setTags] = useState([])
    

  return (
    <main>   
      <Filtros tags={tags} setTags={setTags} />
      <section>
        <Busqueda autos={autos} tags={tags} setTags={setTags} setAutos={setAutos}/>
        <ListaDeProductos autosFiltrados={autos} />
      </section>
    </main>
  )
}

export default App
