import React from 'react'
import { Flex } from '@chakra-ui/core'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'

const Profile = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      backgroundColor="brand.400"
      alignItems="center"
      justifyContent="center"
    >
      <ProfileCard />
    </Flex>
  )
}

export default Profile
