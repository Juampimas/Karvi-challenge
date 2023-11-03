// COMPONENTE APP
export interface Producto {
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

// COMPONENTE BUSQUEDA
export interface Busqueda {
    autos: Array<{
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
    }>,
    tags:Array<string | number>,
    setTags: (tags: Array<string | number>) => void,
    setAutos: (autos: Array<{
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
      }>) => void,
      grid:boolean, 
      setGrid: (grid: boolean) => void,
      initialCars:Array<{
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
export interface Sort {
    brand:Array<string>,
    minYear:Array<string | number>,
    maxYear:Array<string | number>,
    version:Array<string>,
    model:Array<string>,
    city:Array<string>
  }

// COMPONENTE DROPDOWN
export interface SubTitle {
    title:string,
    subFilter?:Array<{
        name:string,
        count: number
    }>,
    yearFilter?:Array<{
        name:number,
        count: number
    }>,
    tags:Array<string | number>,
    setTags: (tags: Array<string | number>) => void
    }

// COMPONENTE FAVORITOS Y LISTA DE PRODUCTOS
export interface Autos {
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
    }>,
    grid:boolean, 
    setGrid: (grid: boolean) => void,
    favorito: Array<number>,
    setFavorito:(favorito: Array<number>) => void,
    autosQt:number, 
    currentPage:number, 
    setCurrentPage:(currentPage: number) => void
  }

// COMPONENTE FILTROS
export interface Categorias {
    tags:Array<string | number>,
    setTags: (tags: Array<string | number>) => void
  }

// COMPONENTE PAGINACION
export interface Pages {
    currPage: number,
    numPages: number, 
    setPage: (currPage: number) => void
}