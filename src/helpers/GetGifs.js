
export const getGifs = async ( category ) => {
            
    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&limit=10&api_key=m1zIFHFK64skn33ViFZrPb5YhnU1LyMu`;
    const response = await fetch(url);
    const { data } = await response.json();

    return data.map( (gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }))
}