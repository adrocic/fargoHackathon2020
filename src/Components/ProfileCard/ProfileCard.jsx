import React from 'react'
import { Flex, Avatar, Stack, Text } from '@chakra-ui/core'

const ProfileCard = () => {
  const isSignedIn = true

  if (isSignedIn) {
    return (
      <Flex
        height="800px"
        width="700px"
        borderRadius="4px"
        backgroundColor="gray.50"
        p="40px"
      >
        <Flex flexDir="column" width="100%">
          <Flex
            width="100%"
            justifyContent="center"
            justifySelf="center"
            p="10px"
            backgroundColor="gray.200"
            borderRadius="4px"
          >
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              mr="30px"
            />
            <Text fontSize="48px" color="gray.600" fontWeight="bold">
              Segun Adebayo
            </Text>
          </Flex>
          <Flex flexDir="column" p="10px" backgroundColor="gray.200" mt="auto">
            <Text color="gray.600" fontSize="20px" mb="12px">
              Connected With
            </Text>
            <Stack isInline>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Avatar
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
              />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    )
  }
}

export default ProfileCard
