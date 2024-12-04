"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Hero  ()  {
  const handleButtonClick=() =>{
    alert("Button clicked!")
  };
  return (
    
<div className=' content'>
        <div className='text-section'>
        <h1> Hi, <br /> I 'M Aumbreen Zahara
        </h1>
        
        
              
 </div>
 <div className='image-section'>
 <Image src="/css(1).jpeg" width="250" height="250" alt="text" />
 </div>
 <p>Front End-Developer
 efficent code and a user-centered apporach<br />transform ideas into polished,visually engaaging user interface and more IT tools information.
        </p>
        <div>
        <button className='button' onClick={handleButtonClick}  >Resume

          <Link href="c:\haqathon\milestone 1\index.html">

          </Link>
        </button>
        </div>

      </div>



  )
};