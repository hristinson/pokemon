export type PokemonType = {name: string, url: string}
export type currentPokemon = {sprites: {other : {dream_world: {front_default: string}}} }
export type PokemonResponse = {
    count:number,
    next: string | null
    previous: string | null
    results: PokemonType[]

}