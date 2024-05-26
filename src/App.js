import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import Navebar from "./component/navebar";
import Headerpage from "./component/headerpage";
import Listmenu from "./component/listmenu";
import Cardmenu from "./component/cardmenu";
import {Data} from "./data"

function App() {
  const [data, setdata] = useState(Data)
  //return uniqe category
  
  const allCategory = [ "الكل",...new Set(data.map((item)=>item.category ))]
  // thisfunction filer by ctegory
  const filterByCategory = (ele)=>{
    if(ele === "الكل") {
      setdata(Data)
    }else {
      const newAray = data.filter((item)=> item.category ===ele)
    setdata(newAray)
    }
  }
  return (
    <div >
      <Navebar/>
  <Container>
    <Headerpage/>
    <Listmenu filterByCategory={filterByCategory} allCategory={allCategory}/>
    <Cardmenu data ={data}/>
  </Container>
    </div>
  );
}

export default App;
