import React from 'react';
import Navbar from './Navbar';
import Subnavbar from './Subnavbar';
import { useRole } from './RoleContext';
import ActualCommit from './ActualCommit';

const Layout = ({ children }) => {
  const { role, name } = useRole();

  return (
    <div>
      {role && <Navbar />}
      {name && <Subnavbar />}
      
      <main>{children}</main>

      {/* Render ActualCommit only if role exists and name is empty */}
      {role && name === '' && <ActualCommit />}
    </div>
  );
};

export default Layout;
