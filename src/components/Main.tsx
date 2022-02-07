import { useEffect, useState } from "react"
import { Resultslist } from "./ResultsList";
import {SearchForm} from "./SearchForm"
export {}

export function Main(){


 const[gifs, setGifs] = useState([]);
 const [searchTerm, setSearchTerm]= useState('')
 const [trending, setTrending] = useState ('')

 function setSearch(search: string){
     setSearchTerm(search)
 }

 useEffect(() => {

    getTrending().then((data)=> { setTrending(data.trending);
     
        

    })
}, [])

useEffect(() => {

    getSearched().then((data)=> { setSearchTerm(data.searched);
     
        

    })
}, [])





 
    


    return(

        <div>

            <SearchForm onSubmit={(searchTerm)=> setSearch(searchTerm)}></SearchForm>

            <Resultslist></Resultslist>
        </div>

    )


}


