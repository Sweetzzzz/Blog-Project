import React from 'react'
import {Navbar, Blogs, Footer, FrontText, About} from "../components"

const HomePage = ({blogs}) => {
  
  return (
    <div>
        <Navbar/>
        <FrontText/>
        <About/>
        <Blogs blogs={blogs}/>
        <Footer/>

    </div>
  )
}

export default HomePage