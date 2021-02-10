import MenuItem from './MenuItem';
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
import menuStyles from '../styles/Menu.module.css';

const MenuList = () => {
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
      {items.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
};

export default MenuList;
