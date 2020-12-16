import './App.css';
import {Button, Container, Flex, FormControl, Grid, Input } from '@chakra-ui/react';
import MovieCard from './MovieCard';
import { useState } from 'react';


const movies = [
  {
    id: 1,
    name: "Dapper's Revenge",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "3.4",
      img: "1.jpeg",
    date: "12/12/2018"
  },
  {
    id: 2,
    name: "Hey Junior",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "3.8",
      img: "2.jpeg",
    date: "19/06/2014"
  },
  {
    id: 3,
    name: "Ophy's Wedding",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "2.6",
      img: "3.jpeg",
    date: "07/05/1998"
  },
  {
    id: 4,
    name: "Caleb's Friends",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "4.0",
      img: "4.jpeg",
    date: "16/08/2012"
  },
  {
    id: 5,
    name: "Mr. Del",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "2.8",
      img: "5.jpeg",
    date: "02/11/2010"
  },
  {
    id: 6,
    name: "Election Prophecy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "4.4",
      img: "6.jpeg",
    date: "21/04/2019"
  },
]
function App() {
  
  const [selected, setSelected] = useState(movies[0]);
  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleChange = (item) => {
    setSelected(item)
  }

  const deleteMovie = (id) => {
    const remainingMovies = currentMovies.filter(movie => movie.id !== id);
    setCurrentMovies(remainingMovies);
  }

  const clicked = () => {
    
  }
  return (
    <Container maxW='6xl' py={20}>
      <form>
        <Flex mb={14}>
          <FormControl>
            <Input
              placeholder='Search for movies....'
              h={14}
              value={selected.name}
              onChange={(event)=>setSelected(event.target.value)}
              rounded='0px'
              borderWidth={2}
              borderColor='gray.500'
              bg='white'
              _hover={{ borderColor: 'gray.500' }}
              _focus={{ borderColor: 'gray.500' }}
            />
          </FormControl>
          <Button type="submit" colorScheme='purple' rounded='0px' w={56} h={14} onClick={clicked}>
            Save
          </Button>
        </Flex>
      </form>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} selected={selected.id === movie.id} click={()=>handleChange(movie)} deleteMovie={()=>deleteMovie(movie.id)} />
        ))}
      </Grid>
    </Container>
  );
}

export default App;
