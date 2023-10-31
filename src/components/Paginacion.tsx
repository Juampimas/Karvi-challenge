import "../sass/Paginacion.scss"
import left_arrow from "../assets/left_arrow.svg"
import right_arrow from "../assets/right_arrow.svg"
// import { useEffect } from "react"

interface Pages {
    currPage: number,
    numPages: number, 
    setPage: (currPage: number) => void
}

function Paginacion({currPage, setPage, numPages}:Pages) {

    
    function NextPage(){
        if(currPage === numPages){
          return currPage
        } else {
            setPage(currPage + 1)
        }
    }
    
    function PrevPage(){
        if(currPage === 1){
            return currPage
        } else {
            setPage(currPage - 1)
        }
    }
    
    function numberPages(){
        const pagNums = []
        if(numPages > 6){
            for (let index = 0; index < numPages; index++) {
                pagNums.push(index + 1);        
            }
        }
        return pagNums.map((pag) => (
            <li onClick={() => {setPage(pag)}} className={`page_number ${pag===currPage ? "active" : "inactive"}`} key={crypto.randomUUID()}>{pag}</li>
        ))
    }
    
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