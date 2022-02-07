export function getTrending(){

    console.log()

    return axios.get<>('https://api.giphy.com/v1/gifs/trending?api_key=')
                .then(response => response.data)
}

export function getSearched(){

    console.log()

    return axios.get<>('https://api.giphy.com/v1/gifs/search?api_key')
                .then(response => response.data)
}