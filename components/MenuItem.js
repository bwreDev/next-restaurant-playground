import menuStyles from '../styles/Menu.module.css';

const MenuItem = ({ item }) => {
  return (
    <div className={menuStyles.card}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>{item.price}</span>
    </div>
  );
};

export default MenuItem;
