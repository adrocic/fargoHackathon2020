import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <Flex
      height="100%"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      background="dodgerblue"
    >
      <Flex>
        <Text>Host or Find an event for</Text>
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
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Flex>
    </Flex>
  )
}

export default Home
