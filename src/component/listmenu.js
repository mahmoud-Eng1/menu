import React from 'react'

const Listmenu = ({filterByCategory, allCategory}) => {

  // this function filter foods when click button
  const filterBtn = (cat)=> {
    filterByCategory(cat)
  }
  return (
    <div className='d-flex justify-content-center'>
      {allCategory.map((ele)=> {
        return(
          <button onClick={()=> filterBtn(ele) } className='btnListMenu '>{ele}</button>
        )
      })}
    </div>
  )
}

export default Listmenu;