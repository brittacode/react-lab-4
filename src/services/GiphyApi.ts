import axios from "axios";
import { Console } from "console";
import { GiphyAPI } from "../models/Gif";




export function getTrending(){

    return axios.get<GiphyAPI>(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=25&rating=g`)
                .then((response) => response.data)
}

export function getSearched(searchTerm: string){

    return axios.get<any>(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=25&rating=g&q=${searchTerm}`)
                .then((response) => response.data)
}