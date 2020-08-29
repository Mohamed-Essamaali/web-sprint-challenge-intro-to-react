import React,{useState,useEffect} from 'react';
import '../App.css'
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
        <div className ='container' style={{display:'flex',flexWrap:'wrap',
        margin:'2% 5% !important',width:'77% !important',padding:'5% !important'}}>
            {characters.map(character=>{
                return <Character character={character}/>
            })
            }
        </div>
       </Row>
       
    
       
    )
}
export default ListCharacter