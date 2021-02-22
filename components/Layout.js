import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
