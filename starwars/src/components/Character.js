// Write your Character component here
import React from 'react'
import {Card, CardTitle,CardSubtitle,CardText,Col,Row} from 'reactstrap'
import styled from 'styled-components';

const AnimatedStyle = styled.div`
    

    &:hover {
        transform: scale(1.15); color:#010101
      }
`


const Character = props=>{
   let {character} = props;



    return(
        <Col xs='6'>
            <AnimatedStyle> <Card style = {{padding:'5%',background:'#daddcf',border:'5px solid #d1f1f1',margin:'2%',textAlign:'left'}}>

              <Col style={{fontWeight:'700',fontSize:'1.3rem'}}><CardTitle>Title: {character.title}</CardTitle></Col>
                <CardSubtitle>Release Date: {character.release_date}</CardSubtitle>
                <CardSubtitle>Episode Id: {character.episode_id}</CardSubtitle>
                <CardSubtitle>Director: {character.director}</CardSubtitle>
                <CardSubtitle>Producer: {character.producer}</CardSubtitle>
                <CardText><h6>Opening crawl:</h6> {character.opening_crawl}</CardText>

                opening_crawl


            </Card>
            </AnimatedStyle> 
        </Col>
       
    )
}
export default Character
