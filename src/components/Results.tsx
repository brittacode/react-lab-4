import { Gifs } from "../models/Gif";

export function Results(props: {gif:Gifs}){


    return(
        <div>


            <div className="giftitle">
               <p>Title:   {props.gif.title}</p> 
               <p>Image:  <img src={props.gif.images.original.url} /></p> 

            </div>
                
        </div>
    )
}