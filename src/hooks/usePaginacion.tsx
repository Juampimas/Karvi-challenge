export function usePaginacion({currPage, numPages, setPage}){

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
        return (pagNums.map((pag) => (
            <li onClick={() => {setPage(pag)}} className={`page_number ${pag===currPage ? "active" : "inactive"}`} key={crypto.randomUUID()}>{pag}</li>
        )))
    }

    return {NextPage, PrevPage, numberPages}
}