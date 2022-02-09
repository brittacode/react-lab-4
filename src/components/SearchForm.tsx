import axios from "axios";
import { useState } from "react";
import { Results } from "./Results";
import { Resultslist } from "./ResultsList";


export function SearchForm(props: {onSearch: (searchTerm:string) => void} ){


    const[input, setInput] = useState('');

        function passUpSearch(){
            props.onSearch(input);

        }
    return(

            <div>
                
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={passUpSearch}>Search</button>

            </div>

        
    )
}