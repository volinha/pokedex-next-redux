import SSRPokemonTable from "@/components/SSRPokemonTable";
import SearchInput from "@/components/SearchInput";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";
import Providers from "@/components/Provider";
import Preloader from "@/components/Preloader";
import Head from "next/head";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <>
    <Head>
      <title>Pokemon</title>
    </Head>
    <main className='bg-slate-800 w-full h-full'>
      <Preloader pokemons={data}/>
      <Providers>
        <SearchInput />
      </Providers>
    </main>
    </>
  );
}

