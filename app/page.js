"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState} from 'react';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [valorInput, setValorInput] = useState('');
  const [valorModel,setValorModel] = useState('2');
  const createQueryString = (name, value) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };
  const manejarCambio = (e) => {
    setValorInput(e.target.value);
  };

  const changeModel = (e) =>{
    setValorModel(e.target.value);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 c">
      
      <div className='place-content-center grid'>
      <label className="pb-4 bold">DONT CHOOSE MY PICTURE</label>
      <label>
        <select 
              value={valorModel} 
              onChange={changeModel} 
              className="w-full p-2 rounded-md text-center border-2 border-grey-100 mb-2"
            >
              <option value="2">2</option>
              <option value="3">3</option>
        </select>
    </label>
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
        const queryParams = new URLSearchParams({
        key: valorInput,
        model: valorModel
      }).toString();
        router.push(`/game?${queryParams}`);
      }}
    >
      START</button>
      </div>
    </main>
  )
}
