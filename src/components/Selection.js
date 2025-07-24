
// // import '../styles.css';

// // import { useNavigate } from "react-router-dom";


// // import { useRole } from './RoleContext';





// // function Selection() {
// //  const [expandedRows, setExpandedRows] = useState({});



  
  
// //   // const handleBeClick = (x) => { navigate('/TeamBuild');console.log("speaical")}
// //     const navigate = useNavigate();
// //   const { setRole, setName } = useRole();

// //   const profileView = (x) => {
// //     setName(x); // ✅ This updates context and triggers re-render of Subnavbar
// //     navigate(`/profile/${x}/Review`);
// //   };

// //   const logout = () => {
// //     setRole('');
// //     setName('');
// //     navigate('/');
// //   };

  


// //   return (
// //         <div>
    
// //       {/* <Navbar /> */}
// // <div style={{justifyContent:'center',alignItems:'center',marginTop:'200px'}}>
// //     <ul style={{border:'1px solid black', padding:'20px' ,width:"300px",alignItems:'center'}}>
// // <button style={{listStyleType:'none'}}  onClick={()=>profileView('robert')}><li >robert</li></button>
// // <button style={{listStyleType:'none'}}><li>Andrew</li></button>
// // <button style={{listStyleType:'none'}}><li>Williams</li></button>
// //       </ul></div>
// //       <button onClick={logout}>logout</button>
     
// //     </div>

// //   );
// // }

// // export default Selection;

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useRole } from './RoleContext';
import DrillDownHierarchy from './DrillDownHierarchy';

function Selection() {
  const [expandedRows, setExpandedRows] = useState({});
  const navigate = useNavigate();
  const { setRole, setName } = useRole();

  const profileView = (x) => {
    setName(x);
    navigate(`/profile/${x}/Review`);
  };

  const logout = () => {
    setRole('');
    setName('');
    navigate('/');
  };

  return (
    <div>
      <DrillDownHierarchy />

      {/* <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
        <ul style={{ border: '1px solid black', padding: '20px', width: "300px", alignItems: 'center' }}>
          <button onClick={() => profileView('robert')}><li>robert</li></button>
          <button onClick={() => profileView('andrew')}><li>Andrew</li></button>
          <button onClick={() => profileView('williams')}><li>Williams</li></button>
        </ul>
      </div> */}

     <div style={{justifyContent:'center',alignItems:'center',display:'flex',padding:'10px'}}> <button  onClick={logout}>Logout</button></div>
    </div>
  );
}

export default Selection;
