import React, { useState } from 'react';
import '../styles.css'; // Keep if needed for other styles
 import { useRole } from './RoleContext';
  import { useNavigate } from 'react-router-dom';
const DrillDownTable = ({ childrenData, level }) => {
  const [expandedRows, setExpandedRows] = useState({});
 const { role,setRole,name, setName } = useRole();
  const toggleRow = (name) => {
    setExpandedRows((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const  navigate=useNavigate();
  const styles = {
    th: {
      backgroundColor: '#eeeeee',
      padding: '8px 12px',
      textAlign: 'left'
    },
    td: {
      padding: '8px 12px',
     
      border:'1px solid black'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
      fontSize:'13px'
    },
    row: {
      cursor: 'pointer'
    }
  };

  

  ;
  
  const openprofile=(x)=>{
     setName(x);
   navigate(`/profile/${x}/Review`);
   window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
     
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name (Level {level})</th>
            <th style={styles.th}>Efficiency(%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(childrenData).map(([name, child]) => (
            <React.Fragment key={name}>
              
              <tr
  style={{
    ...styles.row,
    backgroundColor: child.amount <= 50 ? 'rgb(255, 120, 120)' : 'transparent'
  }}
  onClick={() => toggleRow(name)}
>
  <td style={styles.td}>
    <button onClick={() => openprofile(name)} className='profile-button'>{name}</button>
  </td> 
  <td style={styles.td}>{child.amount}</td>
</tr>

              {expandedRows[name] && child.children && Object.keys(child.children).length > 0 && (
                <tr className="nested">
                  <td colSpan="2" style={{ paddingLeft: '30px' }}>
                    <DrillDownTable childrenData={child.children} level={level + 1} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
   </>
  );
};

export default DrillDownTable;
