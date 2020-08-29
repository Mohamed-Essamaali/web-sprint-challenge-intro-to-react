import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Character from './Character'
import {Row} from 'reactstrap'


const ListCharacter = props=>{


    const[characters,setCharacters] = useState([]);

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
       <Row xs='1'>
        <div style={{display:'flex',flexWrap:'wrap',margin:'2%',}}>
            {characters.map(character=>{
                return <Character character={character}/>
            })
            }
        </div>
       </Row>
       
    
       
    )
}
export default ListCharacter