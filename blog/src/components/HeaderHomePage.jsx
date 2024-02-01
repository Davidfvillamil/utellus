import React from 'react'
import { images } from '../constants'

const NavItemsInfo = [
    {name:'Home'},
    {name:'Articles'},
    {name:'Pages'},
    {name:'Pricing'},
    {name:'Faq'},
]

const NavItem = ({name}) => {
    return(
        <li className='relative group'>
            <a href="" className='px-4 py-2'>{name}</a>
            <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
        </li>
    )
}

function HeaderHomePage() {
  return (
    <section>
        <header className='container mx-auto px-5 flex justify-between items-center'>
            <div>
                <img src={images.Logo} alt="logo" className='logo w-20 h-20' />
            </div>
            <div className='flex gap-x-9 items-center'>
                <ul className='flex gap-x-2 font-semibold' >
                    {NavItemsInfo.map((element) => {
                        return(
                            <NavItem key={element.name} name={element.name}></NavItem>
                        )
                    })}
                </ul>
                <button className='border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign in</button>
            </div>
        </header>
    </section>
  )
}

export default HeaderHomePage
