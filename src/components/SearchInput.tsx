"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";
import { pokemonApi } from "@/store/pokemonApi";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import PokemonTable from "./PokemonTable";
import { Pokemon } from "@/types";

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupPokemon = useAppSelector((state) => state.search.startupPokemon);
  const data = useAppSelector((state) => state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[])

  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(search))
  }, [dispatch, search])

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl p-3 text-white">PokeDex</h1>
      <input
        className='bg-gray-300 border-gray-900 m-3 mb-6 p-2 rounded'
        type='text'
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Type the pokemon name..."
      />
      <PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
    </div>
  );
};

export default SearchInput;
