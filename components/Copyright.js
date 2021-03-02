import footerStyles from '../styles/Footer.module.css';

const Copyright = () => {
  return (
    <div className={footerStyles.spacer}>
      <p className={footerStyles.copyright}>
        © 2021 Central Coast Restaurant Group. All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;
