import { Flex, HStack, Icon, Image,  IconButton, useColorMode, Menu, MenuButton, MenuList, MenuItem, Text, } from '@chakra-ui/react'
import React from 'react'
import logo from '../../IMG/Animate2.png'
import {AiOutlineHome,AiOutlineStar} from 'react-icons/ai';
import {PiTelevisionSimpleLight ,PiPopcornLight} from 'react-icons/pi';
import {IoIosContact} from 'react-icons/io';
import {BiUserCircle, BiMenuAltRight} from 'react-icons/bi'
import {BsMoonStars,BsSun} from 'react-icons/bs'
import {TbSettingsAutomation} from 'react-icons/tb'


export default function Header() {
  const  {toggleColorMode, colorMode} = useColorMode()
  return (
      <Flex px={{base: 5, lg: 16}} w={'full' } position={'absolute'} top={0} left={0} justifyContent={'space-between'} zIndex={10} >
      <Flex  py={'2'}    w={'88%'}   justifyContent={'space-between'} alignItems={'center'}  backdropFilter='blur(8px)' zIndex={10}  >
      <Flex alignItems={'center'} gap={'8'}>
    <Image src={logo} cursor={'pointer'} />
    <Flex gap={{ sm: 5, lg: 10}} display={{ base: 'none', sm: 'flex'}}>
     <Icon color={'white'} fontSize={'2xl'} as={AiOutlineHome} />
     <Icon color={'white'} fontSize={'2xl'} as={IoIosContact} />
     <Icon color={'white'} fontSize={'2xl'} as={PiTelevisionSimpleLight} />
     <Icon color={'white'} fontSize={'2xl'} as={PiPopcornLight} />
     <Icon color={'white'} fontSize={'2xl'} as={AiOutlineStar} />
    </Flex>
      </Flex>
    </Flex>
   <HStack gap={'5'} cursor={'pointer'} >
     <Icon color={'white'} fontSize={'3xl'} as={BiUserCircle} />
     <IconButton aria-label='color-mode' onClick={toggleColorMode} icon={colorMode === 'light' ? <BsMoonStars  /> : <BsSun  />} colorScheme={'facebook'} variant={'ghost'}  />
     <Icon color={'white'} fontSize={'3xl'} as={TbSettingsAutomation} /> 
     <Menu>
  <MenuButton>
     <Icon color={'white'} fontSize={'3xl'} as={BiMenuAltRight} />  
  </MenuButton>
  <MenuList zIndex={50} >
    <MenuItem as='a' href='#' gap={2}>
     <Icon color={'white'} fontSize={'2xl'} as={AiOutlineHome} />
     <Text>About</Text>
    </MenuItem>
    <MenuItem as='a' href='#' gap={2}>
     <Icon color={'white'} fontSize={'2xl'} as={IoIosContact} />
     <Text>Item</Text>
    </MenuItem>
    <MenuItem as='a' href='#' gap={2}>
     <Icon color={'white'} fontSize={'2xl'} as={PiTelevisionSimpleLight} />
     <Text>Contact TV</Text>
    </MenuItem>
    <MenuItem as='a' href='#' gap={2}>
     <Icon color={'white'} fontSize={'2xl'} as={PiPopcornLight} />
     <Text></Text>
    </MenuItem>
    <MenuItem as='a' href='#' gap={2}>
     <Icon color={'white'} fontSize={'2xl'} as={AiOutlineStar} />
     <Text>Item</Text>
    </MenuItem>
  </MenuList>
</Menu> 
      </HStack>
    </Flex>

  )
}
