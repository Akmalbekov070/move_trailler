import { Box, Button, Card, CardBody, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ReactStars from 'react-stars';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Popular({ movies }) {
	const Herobg = useColorModeValue('', 'linear-gradient(30deg , rgba(0,0,0, 0.4 ), rgba(0,0,0,0.6 ) )');
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<Box w={'full'} h={'400px'}>
			<Carousel responsive={responsive}>
				{movies.map(el => (
					<Card key={el.id} maxW='280px' maxH='700px'>
						<CardBody>
							<Image
								w={'full'}
								h={'full'}
								objectFit={'cover'}
								position={'relative'}
								src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
								alt='image'
								borderRadius='lg'
							/>
							<Box position={'absolute'} w={'full'} h={'full'} left={0} top={0} bg={Herobg}></Box>
							<Stack position={'absolute'} bottom={5} py={2} mt='6' spacing='1'>
								<Heading size='sm'>{el.title.slice(0, 15)}</Heading>
								<Box>
									<Text color='blue.600' fontSize='lg' mt={2}>
										{el.popularity}
									</Text>
									<ReactStars size={24} color2={'#ffd700'} value={el?.vote_average} count={10} edit={false} />
								</Box>
								<Box w={'full'} textAlign={'center'}>
									<Button w={'100px'} variant={'outline'} colorScheme='yellow' borderRadius={'xl'} textAlign={'center'}>
										Watch Now
									</Button>
								</Box>
							</Stack>
						</CardBody>
					</Card>
				))}
			</Carousel>
		</Box>
	);
}
