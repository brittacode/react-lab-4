export function getTrending(){

    console.log()

    return axios.get<>('https://api.giphy.com/v1/gifs/trending?api_key=grBlJrYKEILFojcVkBcw2uMMjtGY81TB&limit=25&rating=g')
                .then(response => response.data)
}

export function getSearched(){

    console.log()

    return axios.get<>('https://api.giphy.com/v1/gifs/search?api_key=grBlJrYKEILFojcVkBcw2uMMjtGY81TB&q=&limit=25&offset=0&rating=g&lang=en')
                .then(response => response.data)
}