
import type {Sort} from "../types/interfaces"

export function useSort({sort, setAutos, autos, setSort, tags, initialCars}){
    function sortCars(){
        setSort(!sort)
        if(sort){
            setAutos([...autos].sort((a,b) => a.price > b.price ? 1 : -1))
        } else {
            setAutos([...autos].sort((a,b) => a.price < b.price ? 1 : -1))
        }
    }

    function filterCars(){
        const newCars:Sort = {
            brand:[],
            minYear:[],
            maxYear:[],
            version:[],
            model:[],
            city:[],
        }
        if(tags.length > 0){
            tags.forEach(tag=>{
                initialCars.forEach(car => {
                    if(car.brand === tag && newCars.brand.indexOf(tag) === -1){
                        newCars.brand.push(tag)
                    } else if (car.year.slice(5,9) === tag.toString() && newCars.maxYear.indexOf(tag) === -1){
                        newCars.maxYear.push(tag)
                    } else if (car.version === tag && newCars.version.indexOf(tag) === -1){
                        newCars.version.push(tag)
                    } else if (car.model === tag && newCars.model.indexOf(tag) === -1){
                        newCars.model.push(tag)
                    } else if (car.city === tag && newCars.city.indexOf(tag) === -1){
                        newCars.city.push(tag)
                    } else if (car.year.slice(0,4) === tag.toString() && newCars.minYear.indexOf(tag) === -1){
                        newCars.minYear.push(tag)
                    }
                })
            })
            
            const filterByBrand = newCars.brand;
            const filterByMinYear = newCars.minYear;
            const filterByMaxYear = newCars.maxYear;
            const filterByModel = newCars.model;
            const filterByVersion = newCars.version;
            const filterByCity = newCars.city;

            let filteredBrandProducts = initialCars.filter(auto => filterByBrand.includes(auto.brand));
            if(filteredBrandProducts.length === 0){
                 filteredBrandProducts = initialCars
            }
            let filteredMinYearProducts = filteredBrandProducts.filter(auto => filterByMinYear.includes(parseInt(auto.year.slice(0,4))));
            if(filteredMinYearProducts.length === 0){
                filteredMinYearProducts = filteredBrandProducts
            }
            let filteredModelProducts = filteredMinYearProducts.filter(auto => filterByModel.includes(auto.model));
            if(filteredModelProducts.length === 0){
                filteredModelProducts = filteredMinYearProducts
            }
            let filteredVersionProducts = filteredModelProducts.filter(auto => filterByVersion.includes(auto.version));
            if(filteredVersionProducts.length === 0){
                filteredVersionProducts = filteredModelProducts
             }
            let filteredCityProducts = filteredVersionProducts.filter(auto => filterByCity.includes(auto.city));
            if(filteredCityProducts.length === 0){
                filteredCityProducts = filteredVersionProducts
            }
            let filteredMaxYearProducts = filteredCityProducts.filter(auto => filterByMaxYear.includes(parseInt(auto.year.slice(5,9))));
            if(filteredMaxYearProducts.length === 0){
                filteredMaxYearProducts = filteredCityProducts
            }
        
        setAutos(filteredMaxYearProducts);          
          
    } else if (tags.length === 0){
        setAutos(initialCars)
    }}

    return {sortCars, filterCars}
}