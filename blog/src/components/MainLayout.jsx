import React from 'react'
import HeaderHomePage from './HeaderHomePage'
import FooterHomePage from './FooterHomePage'

function MainLayout({children}) {
  return (
    <div>
      <HeaderHomePage/>
      {children}
      <FooterHomePage/>
    </div>
  )
}

export default MainLayout
