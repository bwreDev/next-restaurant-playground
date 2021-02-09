import Link from 'next/link';
import menuStyles from '../styles/Menu.module.css';

const MenuItem = ({ item }) => {
  return (
    <Link href='/item/[id]' as={`/item/${item.id}`}>
      <a className={menuStyles.card}>
        <h3>{item.title} &rarr;</h3>
        <p>{item.excerpt}</p>
        <p>{item.description}</p>
      </a>
    </Link>
  );
};

export default MenuItem;
