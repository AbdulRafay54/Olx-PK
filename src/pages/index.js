import React from 'react'
import Navbar from './Navbar/page'
import Crousel from './Crousel/page'
import Categories from './Allcategories/page'
import Allcards from './AllCards/page'
import Login from './login/login'
import Footer from './Footer/page'

const index = () => {
  return (
    <>
 <Navbar/>
 <Crousel/>
 <Categories/>
 <Allcards/>
 <Footer/>
 </>
  )
}

export default index