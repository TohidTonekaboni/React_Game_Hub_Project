import { HStack,Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SerachInput from './SerachInput'
const NavBar = () => {
  return (
    <HStack  padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SerachInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar