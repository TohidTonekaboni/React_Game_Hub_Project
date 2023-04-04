import { HStack,Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SerachInput from './SerachInput'

interface Props{
  onSearch: (searchText:string) => void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack  padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SerachInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar