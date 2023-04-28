import { Pokemon } from "@/types";
import { table } from "console";

const PokemonTable = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <div className='grid grid-cols-6 grid-flow-row gap-3 w-full p-3'>
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className='flex flex-col justify-center items-center h-60 bg-slate-400 rounded'>
          <div className='font-bold'>{pokemon.name}</div>
          <div className='flex'>
            {pokemon.type.map((type, index) => (
              <div
                key={index}
                className={`${
                  type === "Normal"
                    ? "bg-slate-300"
                    : type === "Fire"
                    ? "bg-red-500"
                    : type === "Water"
                    ? "bg-blue-500"
                    : type === "Grass"
                    ? "bg-green-500"
                    : type === "Electric"
                    ? "bg-yellow-500"
                    : type === "Ice"
                    ? "bg-cyan-500"
                    : type === "Fighting"
                    ? "bg-orange-500"
                    : type === "Poison"
                    ? "bg-purple-500"
                    : type === "Ground"
                    ? "bg-brown-500"
                    : type === "Flying"
                    ? "bg-sky-500"
                    : type === "Psychic"
                    ? "bg-pink-500"
                    : type === "Bug"
                    ? "bg-lime-500"
                    : type === "Rock"
                    ? "bg-gray-500"
                    : type === "Ghost"
                    ? "bg-indigo-500"
                    : type === "Dragon"
                    ? "bg-violet-500"
                    : type === "Dark"
                    ? "bg-black text-white"
                    : type === "Steel"
                    ? "bg-gray-300"
                    : type === "Fairy"
                    ? "bg-pink-300"
                    : ""
                }
              p-1 m-1 rounded
              `}>
                {type}
              </div>
            ))}
          </div>
          <div className='flex flex-col justify-start items-start'>
            <div>Att: <span className="font-bold">{pokemon.attack}</span></div>
            <div>Def: <span className="font-bold">{pokemon.defense}</span></div>
            <div>Sp. Atk: <span className="font-bold">{pokemon.special_attack}</span></div>
            <div>Sp. Def: <span className="font-bold">{pokemon.special_defense}</span></div>
            <div>Spd: <span className="font-bold">{pokemon.speed}</span></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonTable;
