import Gallery from 'react-photo-gallery';

export default function Photos() {
	const photos = [
		{
			src: '/beer-wall.jpg',
			width: 4,
			height: 4,
		},
		{
			src: '/brewery.jpg',
			width: 4,
			height: 4,
		},
		{
			src: '/burger.jpg',
			width: 4,
			height: 4,
		},
		{
			src: '/bw-vibe.jpg',
			width: 4,
			height: 5,
		},
		{
			src: '/grilled-salmon.jpg',
			width: 4,
			height: 4,
		},
		{
			src: '/hand-tossed-pizza.jpg',
			width: 4,
			height: 4,
		},
		{
			src: '/hosts.jpg',
			width: 4,
			height: 5,
		},
		{
			src: '/pizza-oven.jpg',
			width: 5,
			height: 4,
		},
		{
			src: '/pizza.jpg',
			width: 5,
			height: 4,
		},
		{
			src: '/server.jpg',
			width: 4,
			height: 5,
		},
	];
	return <Gallery photos={photos} />;
}
