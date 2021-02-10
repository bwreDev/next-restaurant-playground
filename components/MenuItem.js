import menuStyles from '../styles/Menu.module.css';

const MenuItem = ({ item }) => {
  return (
    <div className={menuStyles.grid}>
      <ul className={menuStyles.card}>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{item.price}</li>
      </ul>
    </div>
  );
};

export default MenuItem;
