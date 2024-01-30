import React from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page'
function PageLayout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout