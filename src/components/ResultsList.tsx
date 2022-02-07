import { SearchForm } from "./SearchForm"
import { Results } from "./Results"





export function Resultslist(props: {gifs: any[]}){



    return(
        <div>

            {props.gifs.map((gif) => <Results key={gif.id} gifs={gif}></Results>)}

        </div>
    )

}