import MenuItem from './MenuItem';
import menuStyles from '../styles/Menu.module.css';

const MenuList = ({ items }) => {
  return (
    <div className={menuStyles.grid}>
      {items.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
};

export default MenuList;
