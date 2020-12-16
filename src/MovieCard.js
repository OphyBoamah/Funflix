import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const MovieCard = ({movie, selected, click, deleteMovie}) => {
  return (
    <Box borderWidth={selected && 2} borderColor='gray.600' p={2} rounded='md' cursor='pointer' onClick={click}>
      <Box rounded='md' shadow='md' position="relative" overflow='hidden'>
          <Flex align="center" justify="center" bg="#fff" w={8} h={8} position="absolute" top={2} right={2} zIndex={10} fontWeight={800} onClick={deleteMovie}>X</Flex>
          <Image
              h='100%'
              w='100%'
              objectFit='cover'
              src={require(`./Images/${movie.img}`).default}
          />
          <Box bg="rgba(0,0,0,0.5)" position="absolute" left={0} right={0} bottom={0} top={0}>

          </Box>
          <Box px={8} py={10} position="absolute" bottom={4} color="white">
            <Flex align='center' justify='space-between'>
              <Heading as='h3' fontSize='2xl'>
                {movie.name}
              </Heading>
              <Text>{movie.rating}</Text>
            </Flex>
            <Text color='gray.300' my={3}>
              {movie.description}
            </Text>
            <Flex
              align='center'
              justify='space-between'
              color='gray.300'
              fontSize='sm'
            >
              <Text>Release date:</Text>
              <Text>{movie.date}</Text>
            </Flex>
          </Box>
        </Box>
    </Box>
  )
}

export default MovieCard
