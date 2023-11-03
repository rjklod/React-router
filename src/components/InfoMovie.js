import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player/youtube';
import { Link, useParams } from 'react-router-dom';






function InfoMovie ({props}) {
  
  const     obj= useParams()
  const el=props.find((el)=>el.id==obj.id)

console.log(el)
    return (
      <>
        <Card style={{ width: '50rem' }}>
        <ReactPlayer url={el.trailerSrc} width='100%' />
          <Card.Body>
            <Card.Text>
              {el.description}
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Link to={`/`}  >   <Button variant="outline-primary">Return home</Button></Link>  
        </>
      );
    }
   
     


export default InfoMovie
