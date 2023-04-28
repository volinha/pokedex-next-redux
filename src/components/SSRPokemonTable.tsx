import PokemonTable from "./PokemonTable";

import { store } from "@/store"; 

function SSRPokemonTable() {
  return (
    <div>
        <PokemonTable pokemons={store.getState().search.startupPokemon}/>
    </div>
  );
}

export default SSRPokemonTable;