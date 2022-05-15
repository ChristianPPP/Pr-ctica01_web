const consultarPokemon = (id, number) =>
{
    console.log(id)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        pintarPokemon(data, number)
    })
    .catch((error) => {
        console.log(error);
    });
};
consultarPokemon();
const lista = document.getElementById("listarpokemon")
const pintarPokemon = (data, id) => 
{
    let item = lista.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = data.name;
    let pokeUno = ''
    for (let index = 0; index < data.abilities.length; index++) {
        pokeUno += `<li>${data.abilities[index].ability.name}</li>`
    }
    console.log(pokeUno);
    item.getElementsByTagName('ol')[0].innerHTML = pokeUno
}
const btnSeleccionar = () => {
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
}
btnSeleccionar()



// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1