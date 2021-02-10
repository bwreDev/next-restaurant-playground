import { server } from '../config';
import MenuList from '../components/MenuList';

export default function Home({ appetizers }) {
  return (
    <div>
      <MenuList items={appetizers} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/items`);
  const appetizers = await res.json();

  return {
    props: {
      appetizers,
    },
  };
};
