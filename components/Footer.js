import Link from 'next/link';
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <nav className={footerStyles.footer}>
      <ul>
        <li>
          <Link href='/'>
            <img className={footerStyles.logo} src='/blast825.svg' />
          </Link>
        </li>
        <li>
          <a
            href='https://www.facebook.com/Blast825Brewery/'
            target='_blank'
          >
            <img
              className={footerStyles.ico}
              src='/036-facebook.svg'
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/blast825brewery/'
            target='_blank'
          >
            <img
              className={footerStyles.ico}
              src='/029-instagram.svg'
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.yelp.com/biz/me-n-eds-pizzeria-nipomo'
            target='_blank'
          >
            <img className={footerStyles.ico} src='/002-yelp.svg' />
          </a>
        </li>
      </ul>
      <p className={footerStyles.copyright}>
        © 2021 Central Coast Restaurant Group. All rights reserved.
      </p>
    </nav>
  );
};

export default Footer;
