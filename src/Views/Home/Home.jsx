import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/core'
import Typewriter from 'typewriter-effect'

import ActivitySearchCard from '../../Components/ActivitySearchCard'

const Home = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      backgroundColor="brand.400"
      flexDir="column"
    >
      <Flex mb="100px">
        <Text fontSize="32px" color="gray.50" fontStyle="italic" mr={2}>
          Host or Find an event for
        </Text>
        <Text fontSize="48px" color="gray.100" fontWeight="bold">
          <Typewriter
            options={{
              strings: [
                'Fun!',
                'Excitement!',
                'Exercise!',
                'Socializing',
                'Community',
                'Coffee Time!',
                'Food Time!',
                'Spilling The Tea!',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
      </Flex>
      <ActivitySearchCard />
      <Text color="gray.50" fontSize="24px" my="40px"> - OR - </Text>
      <Button height="100px" width="200px" color="brand.400" fontSize="24px" fontWeight="bold" letterSpacing="-2px">
        Host an Event!
      </Button>
    </Flex>
  )
}

export default Home
