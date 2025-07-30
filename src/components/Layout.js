import React from 'react';
import Navbar from './Navbar';
import Subnavbar from './Subnavbar';
import { useRole } from './RoleContext';
import ActualCommit from './ActualCommit';
import Filtering from './Filtering';
import '../styles.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Escalating from './Escalating';
const Layout = ({ children }) => {
  const navigate=useNavigate();
  const { role, name } = useRole();
 const chats = () => { navigate('/Chats');}
  return (
    <div>
      {role && <Navbar />}
{role && name==='' && <div className="message7">
 <button style={{ border: 'none',
    margin: 0,
    background: 'none',
    cursor: 'pointer'}} onClick={chats}> <FontAwesomeIcon icon={faComment} size="3x" /></button>
</div>}

      {/* Uncomment if needed */}
      {/* {name && <Subnavbar />} */}

      <main>{children}</main>

      {/* Show ActualCommit if role exists and name is empty */}
      {role && name === '' && <ActualCommit />}

      {/* Two side-by-side Filtering components */}
      {role && role !== 'BE' && name === '' && (
        <div className='sidebyside'>
         <Filtering />
          <Escalating/>
        </div>
      )}
    </div>
  );
};

export default Layout;
