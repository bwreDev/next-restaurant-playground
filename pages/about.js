import aboutStyles from '../styles/About.module.css';
import Hours from '../components/Hours';

export default function About() {
  return (
    <section className={aboutStyles.about}>
      <h2>About us</h2>
      <p>Blast 825° Brewery</p>
      <Hours />
    </section>
  );
}
