let urlGif = "https://api.giphy.com/v1/gifs/random?api_key=JFxM4euCNTAHbogxeVRFErjY7WPPjv4r&tag=goku";
const obtenerGift = async() => 
{
    try {
        let response = await fetch(urlGif);
        if (!response.ok) 
        {
            throw new Error("Ocurrio un Error al realizar la peticion");    
        }
        let data = await response.json();

        pintarGift(data);
    } catch (error) {
        console.log(error);
    }
}
obtenerGift();
const pintarGift = (data) => 
{
    console.log(data.data.images)
    document.getElementById("gif").setAttribute("src", data.data.images.preview_gif.url);
}
