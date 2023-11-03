import {useState} from "react"

import arrow from "../assets/dropdown_arrow.svg"
import type {SubTitle} from "../types/interfaces"


function DropDownItem({title,subFilter, yearFilter, tags, setTags}:SubTitle){

    const [open, setOpen] = useState(false)

    function addFilter(newFilter){
        if(!tags.includes(newFilter)){
            setTags([...tags,newFilter])
        } else {
            setTags(tags)
        }
    }
    
    return(
        <li className="car-filter">
            <div className="flex-filter" onClick={() => {setOpen(!open)}}>
                <span>{title}</span>
                <img src={arrow} alt="dropdown arrow" className={`dropdown_arrow ${open ? "active" : "inactive"}`}/>
            </div>
            <div className={`dropdown_content ${open ? "active" : "inactive"}`}>
                <ul className="dropdown_sub">
                    {  
                        subFilter 
                        ? 
                        subFilter.map((sub) => (
                            <li onClick={() => {addFilter(sub.name)}} key={crypto.randomUUID()} className="dropdown_li">{sub.name} ({sub.count}) </li>
                            
                        )) 
                        :
                        yearFilter?.map((sub) => (
                            <li onClick={() => {setTags([...tags,sub.name])}} key={crypto.randomUUID()} className="dropdown_li">{sub.name} ({sub.count})</li>
                        ))
                    }
                </ul>
            </div>
        </li>
    )
}

export default DropDownItem;