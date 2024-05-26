import React from 'react';
import { Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const Cardmenu = ({data}) => {
    
  return (
    <div>
        {(data.map((item)=> {
          return(
            <Zoom>
            <Card className='col-12 mb-2' >
            <div className='parentCard' key={item.id} >
          <Card.Img className='imag' variant="top" src={item.image} />
          <Card.Body className='cardInfo'>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.discription}
            </Card.Text> 
            <div className='price'> {item.price}جنيه</div>
          </Card.Body>
          </div>
          </Card>
          </Zoom>
          )
 
        }))}
      
    </div>
  )
}

export default Cardmenu;