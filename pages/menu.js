import MenuList from '../components/MenuList';
import menuStyles from '../styles/Menu.module.css';
import {
  appetizers,
  salads,
  entrees,
  pastas,
  burgers,
  sandwiches,
  tacos,
  pizzas,
  subs,
  kids,
  desserts,
} from '../data';

const menu = () => {
  const items = [
    appetizers,
    salads,
    entrees,
    pastas,
    burgers,
    sandwiches,
    tacos,
    pizzas,
    subs,
    kids,
    desserts,
  ];

  return (
    <div className={menuStyles.grid}>
      <MenuList items={items} />
    </div>
  );
};

export default menu;
