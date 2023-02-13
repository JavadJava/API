//fetching pokemons names from server
    let serverResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    let data = await  serverResponse.json();
    let dataFetched = data.results
//selecting base element
    let pokeCon = document.querySelector(".pokeCon")

dataFetched.forEach(async function(pokemon,index){
//fetching pokemons types from server    
    let pokemonUrl = await fetch(pokemon.url) 
    let pokemonUrlJs =  await pokemonUrl.json()
//
console.log(pokemonUrlJs);
// creating and assigning html elements
    let pokeDiv = document.createElement("div") ;
        pokeDiv.classList.add(`${pokemonUrlJs.types[0].type.name}`)
//
    let pokePic = document.createElement("img");
        pokePic.src = pokemonUrlJs.sprites.other.dream_world.front_default
        pokeDiv.append(pokePic)
    let pokeName = document.createElement("h4");
        pokeName.innerHTML = pokemon.name
        pokeDiv.append(pokeName)   
    let pokeType = document.createElement("h4");
        pokeType.innerHTML = `${pokemonUrlJs.types[0].type.name}`
        pokeDiv.append(pokeType)
// adding created div to the base element
        pokeCon.append(pokeDiv);
//
})