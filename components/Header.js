import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={headerStyles.headerdiv}>
      <p className={headerStyles.headerp}>Life's too short</p>
      <h1 className={headerStyles.headerh1}>Have a blast!</h1>
    </div>
  );
};

export default Header;
