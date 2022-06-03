import React from 'react';
import Header from '../Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* header
            pageContainer
            Footer */}
    </>
  );
};

export default Layout;
