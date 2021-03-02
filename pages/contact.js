import aboutStyles from '../styles/About.module.css';

export default function Contact() {
  return (
    <fieldset className={aboutStyles.about}>
      <h2>
        Here I plan to make a contact form that will let people
        specify subject and body
      </h2>
      <a href='mailto:colton@cc-rg.com'>Email us!</a>
    </fieldset>
  );
}
