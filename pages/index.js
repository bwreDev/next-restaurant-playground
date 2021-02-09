import { server } from '../config';
import MenuList from '../components/MenuList';

export default function Home({ items }) {
  return (
    <div>
      <MenuList items={items} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/items`);
  const items = await res.json();

  return {
    props: {
      items,
    },
  };
};
