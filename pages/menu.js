import { server } from '../config';
import MenuList from '../components/MenuList';
import menuStyles from '../styles/Menu.module.css';

const menu = (items) => {
  return (
    <div className={menuStyles.grid}>
      <MenuList items={items} />
    </div>
  );
};

export const getStaticProps = async () => {
  const url = `${server}/static/data.json`;
  const options = { headers: { 'Content-Type': 'application/json' } };
  const items = await fetch(url, options).then((res) => res.json());

  return {
    props: {
      items,
    },
  };
};

export default menu;
