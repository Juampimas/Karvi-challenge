import left_arrow from "../assets/left_arrow.svg"
import right_arrow from "../assets/right_arrow.svg"
import "../sass/Paginacion.scss"
import type { Pages } from "../types/interfaces"
import { usePaginacion } from "../hooks/usePaginacion"





function Paginacion({currPage, setPage, numPages}:Pages) {

    const {NextPage, PrevPage, numberPages} = usePaginacion({currPage, numPages, setPage})
    
  return (
    <div className="page_flex">
        <button onClick={PrevPage}>
            <img src={left_arrow} alt="icono flecha izquierda" />
            <p>Anterior</p>
        </button>
        <ul>
            {numberPages()}
        </ul>
        <button onClick={NextPage}>
            <p>Próximo</p>
            <img src={right_arrow} alt="icono flecha derecha" />
        </button>
    </div>
  )
}

export default Paginacion