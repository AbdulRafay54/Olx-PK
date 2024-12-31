import React from 'react'
import Navbar from './Navbar/page'
import Crousel from './Crousel/page'
import Categories from './Allcategories/page'
import Allcards from './AllCards/page'
import Login from './Login/page'

const index = () => {
  return (
    <>
 <Navbar/>
 <Crousel/>
 <Categories/>
 <Allcards/>
 </>
  )
}

export default index