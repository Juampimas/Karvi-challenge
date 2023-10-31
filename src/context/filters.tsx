import { createContext, useState } from 'react'


interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}

// Este es el que tenemos que consumir
export const FiltersContext = createContext({})

// Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }:ProviderProps) {
  const [filters, setFilters] = useState({
    brand: 'all',
    model:"all",
    version:"all",
    city:"all",
    year:2010
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}