import React from 'react'
import { Flex, Stack, Text } from '@chakra-ui/core'

const Map = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      backgroundColor="brand.400"
      alignItems="center"
      justifyContent="center"
    >
    <Stack p="20px" backgroundColor="gray.50" borderRadius="4px">
    <Text fontSize="24px">In This Area!</Text>
      <Text fontSize="24px" p="20px" backgroundColor="gray.200" borderRadius="4px">
        Pickup Basketball Game
      </Text>
      <Text fontSize="24px" p="20px" backgroundColor="gray.200" borderRadius="4px">
        Coffee and Learn
      </Text>
      <Text fontSize="24px" p="20px" backgroundColor="gray.200" borderRadius="4px">
        Tea and Learn?
      </Text>
      <Text fontSize="24px" p="20px" backgroundColor="gray.200" borderRadius="4px">
        Hackathon 2020
      </Text>
    </Stack>
      <Flex p="40px" backgroundColor="gray.50" borderRadius="4px" ml="50px">
        <iframe
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?&q=fargo`}
          allowFullScreen
        ></iframe>
      </Flex>
    </Flex>
  )
}

export default Map
