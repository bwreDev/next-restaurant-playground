import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Footer = () => {
	return (
		<nav className={navStyles.nav}>
			<ul>
				<li>
					<Link href='/'>
						<img className={navStyles.logo} src='/blast825.svg' />
					</Link>
				</li>
				<li>
					<a href='https://www.facebook.com/Blast825Brewery/' target='_blank'>
						<img className={navStyles.logo} src='/036-facebook.svg' />
					</a>
				</li>
				<li>
					<a href='https://www.instagram.com/blast825brewery/' target='_blank'>
						<img className={navStyles.logo} src='/029-instagram.svg' />
					</a>
				</li>
				<li>
					<a
						href='https://www.yelp.com/biz/me-n-eds-pizzeria-nipomo'
						target='_blank'>
						<img className={navStyles.logo} src='/002-yelp.svg' />
					</a>
				</li>
			</ul>
			<p className={navStyles.copyright}>
				© 2021 Central Coast Restaurant Group. All rights reserved.
			</p>
		</nav>
	);
};

export default Footer;
