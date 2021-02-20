import Image from 'next/image';

export default function Gallery() {
	return (
		<div className='photo-gallery'>
			<Image
				src='/beer-wall.jpg'
				alt='Self pour beer wall'
				width={500}
				height={500}
			/>
			<Image
				src='/brewery.jpg'
				alt='Large Brewery Tanks'
				width={500}
				height={500}
			/>
			<Image
				src='/burger.jpg'
				alt='Local Burger and fries'
				width={500}
				height={500}
			/>
			<Image
				src='/bw-vibe.jpg'
				alt='Black and white bar'
				width={400}
				height={500}
			/>
			<Image
				src='/grilled-salmon.jpg'
				alt='Grilled salmon and veggies'
				width={500}
				height={500}
			/>
			<Image
				src='/hand-tossed-pizza.jpg'
				alt='Chef hand tossing pizza dough'
				width={450}
				height={500}
			/>
			<Image
				src='/hosts.jpg'
				alt='Hostesses ready to seat you'
				width={375}
				height={500}
			/>
			<Image
				src='/pizza-oven.jpg'
				alt='Wood fired pizza oven'
				width={500}
				height={500}
			/>
			<Image
				src='/pizza.jpg'
				alt='Beautiful pizza ready to eat'
				width={500}
				height={500}
			/>
			<Image
				src='/server.jpg'
				alt='Smiling server with pizza and beer'
				width={500}
				height={500}
			/>
		</div>
	);
}
