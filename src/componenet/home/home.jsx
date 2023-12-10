import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import HeaderCard from '../header-card/headerCard'
import Popular from '../popular/popular'
import axios from 'axios';
import { API_REQUEST } from '../../services/movie';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      axios.get(API_REQUEST.popular).then(res => setMovies(res.data.results))
  },[])
  return (
    <Box>
      <HeaderCard />
      <Box bg={'gray.800'} px={10} py={10} >
        <Popular movies={movies} />
      </Box>
    </Box>
  )
}
