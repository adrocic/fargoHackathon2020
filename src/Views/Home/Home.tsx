import React from 'react';
import { Flex, Box } from '@chakra-ui/core';

const Home = () => {

    return (
        <Flex height="100%" width="100vw" justifyContent="center" alignItems="center" background="dodgerblue">
            <Box height="200px" width="200px" fontSize="24px" color="gray.50" background="floralwhite">Home</Box>
        </Flex>
    );
};

export default Home;
