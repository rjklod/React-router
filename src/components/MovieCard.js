import React from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Rating} from  'react-simple-star-rating';
import ReactPlayer from 'react-player/youtube';
import {Link} from 'react-router-dom';
function MovieCard ({props}) {
  

    return (
        <Card style={{ width: '18rem' }}>
        <ReactPlayer url={props.trailerSrc} width='100%' />
          <Card.Body>
            <Card.Title>
          
              {props.title} 
      
            </Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <Rating iconsCount={5} readonly={true} initialValue={props.rating} />
             <Link to={`/infoMovie/${props.id}`}  >   <Button variant="info">Details</Button></Link>   
          </Card.Body>
        </Card>
      );
    }
   
     


export default MovieCard