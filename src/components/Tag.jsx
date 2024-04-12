import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Tag = () => {

    const [title,setTitle] = useState('');
    const [tag,setTag] = useState('');
    const {gif,loading,fetchData} = useGif(tag);
    

    function changeHandler(event){
        setTag(event.target.value);
    }

    function generateHandler() {
        fetchData();
        setTitle(tag)
    }

  return (
    <div className='relative w-10/12 h-[45vh] md:h-[60vh] md:w-1/3 flex flex-col items-center bg-yellow-200 border-2 border-yellow-400 rounded-lg
    p-3 gap-y-4'>

        <h1 className='text-2xl w-2/3 text-center rounded-md py-2 border border-yellow-500 bg-yellow-100
         text-yellow-700'>Random {title} GIF</h1>

        {
            loading?
            (<div className='absolute w-full h-full flex items-center justify-center'><Spinner/></div>)
             :
            (<img src={gif} alt="gif" 
            className='md:max-h-[30vh] w-[200px] md:w-[350px] rounded-md'/>)
        }


        <input className='w-8/12 py-2 rounded-lg bg-fuchsia-50 border-yellow-600 text-yellow-700 text-xl px-2 text-center
        absolute bottom-[4rem]' 
        type="text"
        value={tag}
        onChange={changeHandler}
        onKeyDown={ (event) => {if (event.key==='Enter'){ generateHandler() }}} />

        <button onClick={generateHandler}
        className='w-8/12 py-2 rounded-lg bg-yellow-50 hover:bg-green-200 border border-yellow-600
        hover:text-green-800 hover:border-green-700 ease-in duration-200 text-yellow-700 text-xl absolute bottom-3'>
            GENERATE
        </button>

    </div>
  )
}
