// import productos from "../mocks/productos.json"
import "../sass/ListaDeProductos.scss"
import button_icon from "../assets/card_button_icon.svg"
import favourite_icon from "../assets/favourite_icon.svg"
import favourite_icon_blue from "../assets/favourite_icon_blue.svg"
import { useState } from "react"
import Paginacion from "./Paginacion"

// interface Producto {
//   id: number,
//   brand: string,
//   model: string, 
//   version: string,
//   year: string,
//   city: string,
//   price: number,
//   mileage: number,
//   state: string,
//   image: string
// }

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
  }>
}

function ListaDeProductos({autosFiltrados}:Autos) {
  
  // const chev = autosFiltrados.filter((car) => {return car.brand === "CHEVROLET"})
  const [autosQt] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const indexFin = currentPage * autosQt;
  const indexIni = indexFin - autosQt;
  const numPages = Math.ceil(autosFiltrados.length / autosQt);

  // const [favorito, setFavorito] = useState(false)


  return (
    <div className="card-container">
      <ul className="card-list">

        {autosFiltrados.slice(indexIni,indexFin).map((e) => (
          <li className="card" key={e.id}>
            <div className="card_flex1">
              <button className="favourite-button"><img src={favourite_icon} alt="icono corazon" /></button>
              <img src={e.image} alt={e.version} />
            </div>
            <div className="card_flex2">
              <div className="card-tags">
                <span>{e.year}</span>
                <span>{e.mileage}km</span>
              </div>
              <h2>{e.brand} {e.model}</h2>
              <p>{e.version}</p>
              <p className="card-price">R$ {e.price}</p>
              <p className="card-location">{e.city}, {e.state}</p>
              <button className="parcelas-button">
                <img src={button_icon} alt="icono compra" />
                <p>Simular parcelas</p>
              </button>
            </div>
          </li>
        ))}

      </ul>
        <Paginacion 
          setPage={setCurrentPage} 
          numPages={numPages} 
          currPage={currentPage} 
        />
    </div>
  )
}

export default ListaDeProductos