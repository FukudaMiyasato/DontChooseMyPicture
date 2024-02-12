"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState} from 'react';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [valorInput, setValorInput] = useState('');
  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };
  const manejarCambio = (e) => {
    setValorInput(e.target.value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 c">
      
      <div className='place-content-center grid'>
      DALL e 3
      <label>
        <input 
          placeholder="open ai api key" 
          type="text" 
          value={valorInput} 
          onChange={manejarCambio} 
          className="w-full p-2 rounded-md text-center border-2 border-grey-100" />
    </label>
      <button
      className="text-center mt-4 py-2 rounded-xl bg-cyan-200"
      onClick={() => {
        router.push("/game" + "?" + createQueryString("key",valorInput));
      }}
    >
      START</button>
      </div>
    </main>
  )
}
