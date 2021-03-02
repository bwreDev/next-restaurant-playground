import aboutStyles from '../styles/About.module.css';

export default function About() {
	return (
		<div className={aboutStyles.about}>
			<h2>About us</h2>
			<p>Blast 825° Brewery</p>
			<h2>Hours of operation</h2>
			<ul>
				<li>Mon - 11am to 10pm</li>
				<li>Tue - 11am to 10pm</li>
				<li>Wed - 11am to 10pm</li>
				<li>Thur - 11am to 11pm</li>
				<li>Fri - 11am to 11pm</li>
				<li>Sat - 11am to 11pm</li>
				<li>Sun - 11am to 10pm</li>
			</ul>
		</div>
	);
}
