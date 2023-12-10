import React, { useEffect, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { api_key, bace_api } from '../../api/api';
import ReactPlayer from 'react-player';

export default function ModalCompanent({ isOpen, onClose, movies }) {
	const [trailer, setTrailer] = useState('');

	const api = `${bace_api}/${movies?.media_type === 'tv' ? 'tv' : 'movie'}/${
		movies?.id
	}/videos?api_key=${api_key}&language=en-US`;

	useEffect(() => {
		const fetchVideoData = async () => {
			const data = await fetch(api).then(res => res.json());
			if (data?.results) {
				const index = data.results.findIndex(item => item.type === 'Trailer');
				setTrailer(data?.results[index]?.key);
			}
		};
		fetchVideoData();
	}, [movies]);
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{movies?.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<ReactPlayer url={`https://www.youtube.com/watch?v=${trailer}`} width={'100%'} height={'440px'} playing controls />
					</ModalBody>

					<ModalFooter></ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
