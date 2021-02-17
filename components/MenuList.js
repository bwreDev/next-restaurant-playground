import MenuSection from './MenuSection';
import menuStyles from '../styles/Menu.module.css';

const MenuList = ({ foodItems }) => {
  return (
    <div className={menuStyles.grid}>
      {foodItems.map((section) => (
        <MenuSection key={section.name} section={section} />
      ))}
    </div>
  );
};

export default MenuList;
