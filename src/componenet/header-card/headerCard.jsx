import { Box, Button, Flex, Heading, Image, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
//import card from '../../IMG/card-img 1.png'
import axios from 'axios';
import { API_REQUEST } from '../../services/movie';
import ReactStars from 'react-stars';
import ModalCompanent from '../modal/modal';

export default function HeaderCard() {
	//const changeColor = useColorModeValue('red', 'green')
	const Herobg = useColorModeValue('', 'linear-gradient(30deg , rgba(0,0,0, 0.4 ), rgba(0,0,0,0.6 ) )');
	const [ispopular, setIsPopular] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const movies = ispopular[Math.floor(Math.random() * ispopular.length)];

	useEffect(() => {
		axios.get(API_REQUEST.popular).then(res => {
			setIsPopular(res.data.results);
		});
	}, []);
	console.log(movies);
	return (
		<Box w={'full'} h={'100vh'}>
			<Image
				w={'full'}
				h={'full'}
				objectFit={'cover'}
				src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
				alt='Card'
			/>
			<Box w={'full'} h={'full'} bg={Herobg} position={'absolute'} top={0} left={0}>
				<Box position={'absolute'} top={36} left={{ base: 5, lg: 36 }}>
					<Text
						textAlign={'center'}
						w={32}
						px={'2'}
						py={1}
						fontSize={'md'}
						color={'cyan.500 '}
						borderRadius={'xl'}
						bg={'blackAlpha.300'}
					>
						{movies?.release_date}
					</Text>
					<Heading py={'6'} fontSize={{ base: '3xl', md: '5xl' }}>
						{movies?.title}
					</Heading>
					<Heading w={'300px'} py={2} fontSize={'lg'} color={'cyan.500 '} borderRadius={'xl'}>
						{movies?.original_title}
					</Heading>
					<Text w={{ base: '100%', md: '60%' }} lineHeight={'8'}>
						{movies?.overview.slice(0, 100)}..
					</Text>
					<Flex
						marginTop={{ base: '8px', lg: '1px' }}
						gap={3}
						alignItems={{ base: 'left', md: 'center' }}
						flexDirection={{ base: 'column', md: 'row' }}
					>
						<Text color={'cyan.500'}>
							Language:{' '}
							<span size={24} color={'red'}>
								{movies?.original_language}
							</span>
						</Text>
						<Text>{movies?.popularity}</Text>
						<ReactStars size={24} color2={'#ffd700'} value={movies?.vote_average} count={10} edit={false} />
					</Flex>
					<Button
						onClick={onOpen}
						w={'40'}
						h={'14'}
						mt={10}
						borderRadius={'full'}
						variant={'outline'}
						color={'gray.400'}
						bg={'transparent'}
					>
						Watch Now
					</Button>
					<ModalCompanent onClose={onClose} onOpen={onOpen} isOpen={isOpen} movies={movies} />
				</Box>
			</Box>
		</Box>
	);
}
