import React from 'react'
import { Flex, Text, Link } from '@chakra-ui/core'
import { Link as Rlink } from 'react-router-dom'

const Nav = () => {
  return (
    <Flex width="100%" backgroundColor="brand.400" p="0" m="0" border="none">
      <Flex width="100%" justifyContent="center" alignItems="center">
        <Rlink to="/explore">
          <Text color="gray.50" fontSize="24px">
            explore
          </Text>
        </Rlink>
        <Rlink to="/">
          <Text
            letterSpacing="4px"
            fontFamily="logo"
            fontSize="48px"
            fontStyle="italic"
            mx="100px"
            color="gray.50"
          >
            Welly
          </Text>
        </Rlink>
        <Rlink to="/profile">
          <Text color="gray.50" fontSize="24px">
            profile
          </Text>
        </Rlink>
      </Flex>
    </Flex>
  )
}

export default Nav
