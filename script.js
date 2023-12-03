async function getAllPoke(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemons = await response.json()

    displayAllPoke(pokemons)
}

function displayAllPoke(pokemons){

    let allPokeResult = document.getElementById("allPokeResult");
    html = "<ul>"
    for(let poke of pokemons.results){
        html += `<li>${poke.name}</li> <br>`
    }
    html += `</ul>`

    allPokeResult.innerHTML = html;
    
},.