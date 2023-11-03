export function usePages({currentPage, autosQt, autosFiltrados}){
    
    const indexFin = currentPage * autosQt;
    const indexIni = indexFin - autosQt;
    const numPages = Math.ceil(autosFiltrados.length / autosQt);

    return {indexIni,numPages, indexFin}
}