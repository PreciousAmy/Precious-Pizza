import React from 'react'
import { useState } from 'react'
import Navcar from '../Navthings/Indexx'
import Sidebar from '../Sidebar/Indexs'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElement'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <HeroContainer>
        <Navcar  toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Mirandah Pizza</HeroH1>
            <HeroP>Ready in a jiffy</HeroP>
            <HeroBtn>Order Now</HeroBtn>
          </HeroItems>
        </HeroContent>
      
    </HeroContainer>
  )
}

export default Hero
