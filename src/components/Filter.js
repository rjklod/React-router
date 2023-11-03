import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function Filter ({search}) {
   
        return (<>

      <Link  to={"/add"}  >  <Button style={{ width: '10rem' }} variant="outline-dark">ADD</Button></Link>    
            <InputGroup className="mb-3">
            <Form.Control
            placeholder="filter"
            aria-label="filter"
            aria-describedby="basic-addon1"
            onChange={(e)=>search(e.target.value)}
            />
         </InputGroup>
         </>
          )
    }    
     


export default Filter