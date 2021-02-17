import { foodItems } from '../public/data';
import MenuList from '../components/MenuList';
import menuStyles from '../styles/Menu.module.css';

const menu = ({ foodItems }) => {
  return (
    <div className={menuStyles.grid}>
      <MenuList foodItems={foodItems} />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      foodItems,
    },
  };
};

export default menu;
