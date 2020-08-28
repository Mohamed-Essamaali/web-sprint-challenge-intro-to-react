import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Character from './Character'


const ListCharacter = props=>{


    const[characters,setCharacters] = useState();

    useEffect(()=>{
        axios
        .get('https://swapi.dev/api/films')
        .then(res=>{
            setCharacters(res.data.results)
            console.log(res.data.results)
        })
        .catch(err=>{
            console.log('something wrong', err)
        })
      
  
    },[])


    return (
        <div>
            <Character/>
        </div>
    )
}
export default ListCharacter