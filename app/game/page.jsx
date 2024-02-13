'use client'
import returnTheme from './components/returnTheme';
import returnTips from './components/returnTips';
const OpenAI = require('openai');
import { useEffect, useState} from 'react';
import { useRouter } from "next/navigation";

const modeltoUse='dall-e-3'
const promptToUse = returnTheme()
const valorAleatorio = Math.floor(Math.random() * 4);

export default function Game({ searchParams }){
    console.log('hey you')
    const [url0,setUrl0] = useState('/loading.gif');
    const [url1,setUrl1] = useState('/loading.gif');
    const [url2,setUrl2] = useState('/loading.gif');
    const [url3,setUrl3] = useState('/yourimg.png');
    const [showOptions,setShowOptions] = useState(false);
    const [classname, setClassname] = useState('border-2 border-cyan-700 rounded-xl');
    const [mostrarFormulario, setMostrarFormulario] = useState(true);
    const [showRecomendation, setShowRecomendation] = useState(false);
    const [tips,setTips] = useState('')
    const openaiKey = searchParams.key
    
    //
    
    //
    async function createImage(promptTemp){

        const openai = new OpenAI({
            apiKey: searchParams.key,
            dangerouslyAllowBrowser: true,
        });
        console.log('inicio la creación de imagenes')
        console.log('prompt :: '+promptTemp)
        const response = await openai.images.generate({
            model: modeltoUse,
            prompt: promptTemp,
            n: 1,
            size: "1024x1024",
          });
          let image_url = response.data[0].url;
          return image_url
      }
    const urlsIniciales = [
        url0,
        url1,
        url2,
        url3,
      ];
    for (let i = urlsIniciales.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [urlsIniciales[i], urlsIniciales[j]] = [urlsIniciales[j], urlsIniciales[i]]; // Intercambio de elementos
      }
    //fin random


    useEffect(() => {
        async function fetchImageData() {
            const imageUrl = await createImage(promptToUse); // Asume que createImage es una función asíncrona que retorna la URL de una imagen
            setUrl0(imageUrl);
            const imageUrl2 = await createImage(promptToUse); 
            setUrl1(imageUrl2);
            const imageUrl3 = await createImage(promptToUse); 
            setUrl2(imageUrl3);
            setShowOptions(true);
        }
        fetchImageData();
    }, []); 
    

    const [valorInput, setValorInput] = useState('');

  // Manejador para actualizar el estado con el valor del input
  const manejarCambio = (e) => {
    setValorInput(e.target.value);
  };

  // Manejador para el envío del formulario
  const manejarEnvio = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    setUrl3('/loading.gif');
    setShowOptions(false)
    setMostrarFormulario(false);

    // Aquí puedes llamar a cualquier función o realizar acciones con el valor del input
    const tempurluser = await createImage(valorInput);
    setUrl3(tempurluser);
    const tempTip = await returnTips(searchParams.key,promptToUse,valorInput);
    setTips(tempTip);
    setShowOptions(true);
      
  };
  const router = useRouter();
    return(
        <main>
        <button
                className='absolute mt-3 ml-4 bg-cyan-100 rounded-xl px-2 text-sm'
                onClick={() => {
                    router.push("/" );
                }}
            >{'<'}</button>
        <div className='p-8'>
          <ul className='columns-4 gap-8 mx-8 my-4'>
              <li className='bg-cyan-100 rounded-md text-center py-2'>1</li>
              <li className='bg-cyan-100 rounded-md text-center py-2'>2</li>
              <li className='bg-cyan-100 rounded-md text-center py-2'>3</li>
              <li className='bg-cyan-100 rounded-md text-center py-2'>4</li>
          </ul>
          <ul className='columns-4 gap-8 mx-8'>
          {valorAleatorio==0 ?  <li id='player' className={classname}>
                  <img className='w-100 rounded-xl'
                      src={url3}
                      alt="Descripción de la imagen"
                      width={1024}
                      height={1024}
                  />
                  </li>:null}
              <li className='border-2 border-cyan-700 rounded-xl'>
                  <img
                      className='rounded-xl'
                      src={url0}
                      alt="Descripción de la imagen"
                      width={1024}
                      height={1024}
                  />
                  </li>
                  {valorAleatorio==1 ?  <li id='player' className={classname}>
                  
                  <img className='w-100 rounded-xl'
                      src={url3}
                      alt="Descripción de la imagen"
                      width={1024}
                      height={1024}
                  />
                  </li>:null}
              <li className='border-2 border-cyan-700 rounded-xl'>
                  <img
                      className='rounded-xl'
                      src={url1}
                      alt="Descripción de la imagen"
                      width={1024}
                      height={1024}
                  />
              </li>
              {valorAleatorio==2 ?  <li id='player' className={classname}>
                  
                  <img className='w-100 rounded-xl'
                      src={url3}
                      alt="Descripción de la imagen"
                      width={1024}
                      height={1024}
                  />
                  </li>:null}
              <li className='border-2 border-cyan-700 rounded-xl'>
                  <img
                      className='rounded-xl'
                      src={url2}
                      alt="Descripción de la imagen"
                      width={1024}
                      height={1024}
                  /></li>
                  {valorAleatorio==3 ?  <li id='player' className={classname}>
                  
                  <img className='w-100 rounded-xl'
                      src={url3}
                      alt="Descripción de la imagen"
                      width={1024}
                      height={1024}
                  />
                  </li>:null}
             
          
          </ul>
          {showRecomendation ? <div className='my-8 mx-16 text-center rounded-xl bg-gray-100 p-4'>
            <div className='columns-2'>
                <div className='mb-2 font-medium text-xs grid place-items-center h-4'>YOUR PROMPT</div>
                <div className='mb-2 font-medium text-xs grid place-items-center h-4'>COMPUTER PROMPT</div>
            </div>
            <div className='flex flex-col md:flex-row space-x-4 text-xs'>
                <div className='flex-1 bg-gray-200 rounded-xl flex items-center justify-center p-4'>
                    {valorInput}
                </div>
                <div className='flex-1 bg-gray-300 rounded-xl flex items-center justify-center p-4'>{promptToUse}</div>
            </div>
            <div>
            <div className='mb-4 font-medium text-xl grid place-items-leftç bg-cyan-100 rounded-xl p-2 mt-8'>TIPS</div>
            <div className='text-xs'>
                <div dangerouslySetInnerHTML={{ __html: tips }} />
            </div>
            </div>
          </div> : null}
          {showOptions ? <div>
          {mostrarFormulario ?
          <form className='bg-cyan-100 rounded-xl p-2 mt-8 mx-16 flex justify-between items-center' onSubmit={manejarEnvio}>
    <div className="flex-grow">
      <label>
        <input type="text" value={valorInput} onChange={manejarCambio} className="w-full p-2 rounded-md" />
      </label>
    </div>
    <button className='bg-cyan-700 rounded-xl p-2 text-white ml-4' type="submit">GENERATE</button>
  </form>
          : <div  className='flex columns-2 gap-8 mx-8 my-10 place-content-center justify-center'>
              <button
                  className='bg-cyan-500 text-white py-2 px-4 m-2 rounded-xl'
                  onClick={() => {
                      setClassname('border-8 border-cyan-700 rounded-xl');
                      setShowRecomendation(true);}}
              >SHOW</button>
              
              <button
                  className='border-cyan-500 border-2 text-cyan-700 rounded-xl border-cyan-500 m-2  px-4'
                  onClick={() => {
                      //router.push("/" );
                      window.location.reload();
                  }}
              >NEW</button>
              </div>}
              </div>:null}
              </div>
        </main>
    )
}