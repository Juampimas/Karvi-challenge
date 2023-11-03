import button_icon from "../assets/card_button_icon.svg"
import favourite_icon from "../assets/favourite_icon.svg"
import "../sass/ListaDeProductos.scss"

function RenderAutos({autosFiltrados, indexIni, indexFin, favorito, setFavorito, grid}) {

    function HandleClick(e){
        const newFavourite = e.id
        if(favorito.includes(newFavourite)){
          setFavorito(favorito)
        } else {
          setFavorito([...favorito, newFavourite])
        }
      }
    
  return (
    <ul className={`card-list ${grid ? "active" : "inactive"}`}>
        {
        autosFiltrados.length === 0 
        ?
        <p>No se encontraron resultados</p>
        :
        autosFiltrados.slice(indexIni,indexFin).map((e) => (
          <li className="card" key={e.id}>
            <div className="card_flex1">
              <button className="favourite-button" onClick={() => {HandleClick(e)}}><img className="Btn_Img" src={favourite_icon} alt="icono corazon" /></button>
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
        ))
        }
    </ul>
  )
}

export default RenderAutos