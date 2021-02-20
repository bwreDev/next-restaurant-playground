import Image from 'next/image';

const MenuItem = ({ item }) => {
	return (
		<>
			<h3>{item.title}</h3>
			<Image
				src={(item.img, '/blast825.svg')}
				alt={item.alt}
				width={100}
				height={100}
			/>
			<p>{item.description}</p>
			<span>{item.price}</span>
		</>
	);
};

export default MenuItem;
