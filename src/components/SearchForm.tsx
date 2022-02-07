import axios from "axios";
import { useState } from "react";
import { Results } from "./Results";
import { Resultslist } from "./ResultsList";


export function SearchForm(props: {onSubmit: (searchTerm:string) => void} ){


    const[searchTerm, setSearchTerm] = useState('');




    
    


    return(

            <div>
                
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text"></input>
            <button onClick={() => props.onSubmit(searchTerm)}>Search</button>

            </div>

        
    )
}