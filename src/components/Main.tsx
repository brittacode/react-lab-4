import { useEffect, useState } from "react"
import { Gifs } from "../models/Gif";
import { getSearched, getTrending } from "../services/GiphyApi";
import { Resultslist } from "./ResultsList";
import {SearchForm} from "./SearchForm"


export function Main(){


 const[gifs, setGifs] = useState<Gifs[]>([]);
 const [searchTerm, setSearchTerm]= useState('')
 

 
        useEffect(() =>{

            if (searchTerm === ''){
                getTrending().then(response => setGifs(response.data));
            } else {
                 getSearched(searchTerm).then(response => setGifs(response.data))
 
            }

        }, [searchTerm]);
 

    
        function setSearch(searchTerm: string){
            setSearchTerm(searchTerm)
        }

    return(

        <div>

            <SearchForm  onSearch={setSearch}></SearchForm>

            <Resultslist gifs={gifs}></Resultslist>
        </div>

    )


}


