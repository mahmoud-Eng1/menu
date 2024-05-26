
import React, {useState} from 'react'
import {Button, Container, Form, Navbar} from "react-bootstrap"

const Navebar = ({filtersearch}) => {
const [valuesearch, setvaluesearch] = useState("")
  const clicksearch = (word)=> {
    filtersearch(valuesearch)
  }
  return (
    <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand href="#" >
      <div className='logo'>ماكولاتي</div>
      </Navbar.Brand>
      
    </Container>
  </Navbar>
        
  )
}

export default Navebar