import aboutStyles from '../styles/About.module.css';

const Hours = () => {
  return (
    <ul className={aboutStyles.hours}>
      <li>
        <h2>Hours of operation</h2>
      </li>
      <li>Mon - 11am to 10pm</li>
      <li>Tue - 11am to 10pm</li>
      <li>Wed - 11am to 10pm</li>
      <li>Thu - 11am to 11pm</li>
      <li>Fri - 11am to 11pm</li>
      <li>Sat - 11am to 11pm</li>
      <li>Sun - 11am to 10pm</li>
    </ul>
  );
};

export default Hours;
