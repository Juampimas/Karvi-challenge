import favourite_icon from "../assets/favourite_icon.svg"
import button_icon from "../assets/card_button_icon.svg"

function RenderFavs({nuevosAutos, grid, indexIni, indexFin, favorito, setFavorito, setNuevosAutos}) {

    function DeleteFav(e){
        setNuevosAutos(nuevosAutos.filter((auto) => auto.id !== e.id)) 
        setFavorito(favorito.filter((num) => {num !== e.id}))
    }

  return (
    <ul className={`card-list ${grid ? "active" : "inactive"}`}>
        {
        nuevosAutos.length === 0 
        ?
        <p>No se encontraron resultados</p>
        :
        nuevosAutos.slice(indexIni,indexFin).map((e) => (
          <li className="card" key={e.id}>
            <div className="card_flex1">
              <button className="favourite-button" onClick={() => {DeleteFav(e)}}><img className="Btn_Img" src={favourite_icon} alt="icono corazon" /></button>
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

export default RenderFavs