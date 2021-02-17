import MenuItem from './MenuItem';
import menuStyles from '../styles/Menu.module.css';

const MenuSection = ({ section }) => {
  return (
    <section className={menuStyles.card}>
      <h2>{section.name}</h2>
      {section.menuItems.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </section>
  );
};

export default MenuSection;
