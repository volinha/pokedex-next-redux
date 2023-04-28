import SSRPokemonTable from '@/components/SSRPokemonTable';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <main className={inter.className}>
      <SSRPokemonTable />
    </main>
  )
}
