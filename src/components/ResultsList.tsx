import { Gifs } from "../models/Gif"
import { Results } from "./Results"





export function Resultslist(props: {gifs:Gifs[]}){



    return(
        <div>
            <div className="gifresults">

                
            Results:

            {props.gifs.map(gif => <Results key={gif.id} gif={gif}></Results>)}
            </div>
        </div>
    )

}