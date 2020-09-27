import React from 'react'
import {
  Flex,
  Text,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/core'
import { useForm } from 'react-hook-form'

const ActivitySearchCard = () => {
  const { register, handleSubmit, errors, formState } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <Flex
      width="auto"
      bg="gray.50"
      borderRadius="4px"
      px="40px"
      pt="10px"
      pb="15px"
      flexDir="column"
    >
      <Text color="brand.300" fontSize="24px" mb="20px">
        Find Activities
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex alignItems="center">
          <FormControl isInvalid={errors.search}>
            <Input
              width="300px"
              height="50px"
              mr="20px"
              placeholder="City/State or Zip"
              name="search"
              ref={register({ required: true })}
            />
            <FormErrorMessage>
              {errors.search && errors.search.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            bg="gray.300"
            height="50px"
            type="submit"
            isLoading={formState.isSubmitting}
          >
            Go!
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export default ActivitySearchCard
