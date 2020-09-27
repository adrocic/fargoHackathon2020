import React from 'react'
import { Flex } from '@chakra-ui/core'

const Map = () => {
  return (
    <Flex>
      <iframe
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAGWYDoqieZZOZEeo_LN96h0Qt7QaXJxpo
    &q=${localStorage.getItem('search')}`}
        allowFullScreen
      ></iframe>
    </Flex>
  )
}

export default Map
