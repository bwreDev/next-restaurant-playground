import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='keywords' content={keywords} />
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<link rel='icon' type='image/svg+xml' href='/blast825.svg' />
			<link rel='alternate icon' href='/blast825.ico' />
			<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ff8a01' />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: 'Blast 825°',
	keywords:
		'blast825, blast 825, orcutt, california, bar restaurant, bars and restaurants, local restaurants, places to eat, gift cards, bar, restaurant, pizza, beer',
	description: `Life's too short, have a blast! Locally sourced, high quality ingredients and the best brews from the central coast.`,
};

export default Meta;
