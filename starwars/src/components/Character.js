// Write your Character component here
import React from 'react'
import {Card, CardTitle,CardSubtitle,CardText,Col,Row} from 'reactstrap'


const Character = props=>{
   let {character} = props;



    return(
        <Col xs='6'>
            <Card style = {{padding:'5%',background:'#daddcf',border:'1px solid #f1f1f1',margin:'2%',textAlign:'left'}}>

                <Col style={{fontWeight:'700',fontSize:'1.3rem'}}><CardTitle>Title: {character.title}</CardTitle></Col>
                <CardSubtitle>Release Date: {character.release_date}</CardSubtitle>
                <CardSubtitle>Episode Id: {character.episode_id}</CardSubtitle>
                <CardSubtitle>Director: {character.director}</CardSubtitle>
                <CardSubtitle>Producer: {character.producer}</CardSubtitle>
                <CardText><h6>Opening crawl:</h6> {character.opening_crawl}</CardText>

                opening_crawl


            </Card>
        </Col>
       
    )
}
export default Character
