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
    
}

async function searchSpecificPoke(){
    let searchInApi = document.getElementById("searchInApi");
    let pokeName = searchInApi.value
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    const poke = await response.json();
    console.log(poke);

    displayPokeDetails(poke)
}

function displayPokeDetails(poke){
    let specificPokeResult = document.getElementById("specificPokeResult");

    let html = "<ul>"
    
    
    let abilities = poke.abilities.map(key => key.ability.name)
    let moves = poke.moves.map(key => `${key.move.name}`)
    
        html += 
        `
            <li>${[poke.forms[0].name]}</li> <br>
            <li>${[poke.types[0].type.name]}</li> <br>
            <li>Abilities: ${abilities.join(", ")}</li> <br>
            <li>Moves: ${moves.join(", ")}</li> <hr>
            <li><img src="${poke.sprites.other['official-artwork'].front_default}"></li>
            
            

        `
    
    
    html += `</ul>`

    specificPokeResult.innerHTML = html;
}