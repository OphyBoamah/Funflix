import './App.css';
import {Button, Container, Flex, FormControl, FormLabel, Box, Textarea, Grid, Input, Select } from '@chakra-ui/react';
import MovieCard from './MovieCard';
import { useState } from 'react';


const movies = [
  {
    id: 1,
    name: "Dapper's Revenge",
    category: 'horror',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "3.4",
      img: "1.jpeg",
    date: "12/12/2018"
  },
  {
    id: 2,
    name: "Hey Junior",
    category: 'adventure',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "3.8",
      img: "2.jpeg",
    date: "19/06/2014"
  },
  {
    id: 3,
    name: "Ophy's Wedding",
    category: 'horror',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "2.6",
      img: "3.jpeg",
    date: "07/05/1998"
  },
  {
    id: 4,
    name: "Caleb's Friends",
    category: 'comedy',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "4.0",
      img: "4.jpeg",
    date: "16/08/2012"
  },
  {
    id: 5,
    name: "Mr. Del",
    category: 'comedy',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "2.8",
      img: "5.jpeg",
    date: "02/11/2010"
  },
  {
    id: 6,
    name: "Election Prophecy",
    category: 'adventure',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.",
    rating: "4.4",
      img: "6.jpeg",
    date: "21/04/2019"
  },
]
function App() {
  
  const [selected, setSelected] = useState(movies[0]);
  const [currentMovies, setCurrentMovies] = useState(movies);
  const [movie, setMovie] = useState({
    id: '',
    name: '',
    category: '',
    description: '',
    rating: '',
    img: '',
    date:''
})

  const handleChange = (item) => {
    setSelected(item)
  }

  const deleteMovie = (id) => {
    const remainingMovies = currentMovies.filter(movie => movie.id !== id);
    setCurrentMovies(remainingMovies);
  }

  console.log(movie);
  const clicked = () => {
    
  }

  const addMovie = (event) => {
    event.preventDefault();
    const newMovie = {
    id: Math.random() * 100,
    name: movie.name,
    category: movie.category,
    description: movie.description,
    rating: movie.rating,
    img: '6.jpeg',
    date: movie.date,
    }
    setCurrentMovies([...currentMovies, newMovie])
  }

  return (
    <Container maxW='6xl' py={20}>
      <form >
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
          <Select>
            <option value="all">
              All
            </option>
            <option value="adventure">
              Adventure
            </option>
            <option value="comedy">
              Comedy
            </option>
            <option value="horror">
              Horror
            </option>
          </Select>
        </Flex>
      </form>
      <form >
        <Box w='600px' mx='auto' mb={10}>
          <Grid templateColumns='repeat(3, 1fr)' gap={4}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input bg='white' rounded='0px' name='name' value={movie.name} onChange={(event)=>setMovie({...movie, name: event.target.value})} />
            </FormControl>
            <FormControl>
              <FormLabel>Rating</FormLabel>
              <Input bg='white' rounded='0px' type='number' name='rating' value={movie.rating} onChange={(event)=>setMovie( {...movie, rating: event.target.value})} />
            </FormControl>
            <FormControl>
              <FormLabel>Release Date</FormLabel>
              <Input bg='white' rounded='0px' type='date' name='date' value={movie.date} onChange={(event)=>setMovie({...movie, date: event.target.value})} />
            </FormControl>
          </Grid>
          <Box my={4}>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea bg='white' rounded='0px' name='description' value={movie.description} onChange={(event)=>setMovie({...movie, description: event.target.value})}/>
            </FormControl>
          </Box>
          <Box>
            <Button colorScheme='blue' rounded='0px' onClick={addMovie}>
              Add movie
            </Button>
          </Box>
        </Box>
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
