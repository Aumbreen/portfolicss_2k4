import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    
        <nav  className='navbar'>
          <div className='navbar-brand'> Az</div>
          <ul className='navbar-links'> <li>
            
          <Link href="/">Home </Link>
            </li>
        
       <li> <Link href="/about">About </Link></li>
       <li><Link href="/Contact">Contact </Link></li>
</ul>
      </nav>
       
    
  )
}

export default Navbar