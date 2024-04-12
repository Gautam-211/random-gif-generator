import React from 'react';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';


export const Random = () => {

   const {gif,loading,fetchData} = useGif();
    

    function generateHandler() {
        fetchData();
    }

  return (
    <div className='relative w-10/12 h-[35vh] md:h-[60vh] md:w-1/3 flex flex-col items-center bg-fuchsia-200 border-2 border-fuchsia-400 rounded-lg
    p-3 gap-y-4'>

        <h1 className='text-2xl w-1/2 text-center rounded-md py-2 border border-fuchsia-500 bg-fuchsia-100
         text-fuchsia-700'>Random GIF</h1>

        {
            loading?
            (<div className='absolute w-full h-full flex items-center justify-center'><Spinner/></div>)
             :
            (<img src={gif} alt="gif" 
            className='max-h-[150px] md:max-h-[30vh] w-[200px] md:w-[350px] rounded-md'/>)
        }
        

        <button onClick={generateHandler}
        className='absolute bottom-8 w-8/12 py-2 rounded-lg bg-fuchsia-50 hover:bg-green-200 border border-fuchsia-600
        hover:text-green-800 hover:border-green-700 ease-in duration-200 text-fuchsia-700 text-xl'>
            GENERATE
        </button>

    </div>
  )
}
