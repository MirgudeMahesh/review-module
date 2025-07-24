import React, { useState } from 'react';
import stylesCSS from '../styles.css'; // Keep if needed for other styles

const DrillDownTable = ({ childrenData, level }) => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (name) => {
    setExpandedRows((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const styles = {
    th: {
      backgroundColor: '#eeeeee',
      padding: '8px 12px',
      textAlign: 'left'
    },
    td: {
      padding: '8px 12px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px'
    },
    row: {
      cursor: 'pointer'
    }
  };

  // Define hover styles separately

  ;

  return (
    <>
     
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name (Level {level})</th>
            <th style={styles.th}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(childrenData).map(([name, child]) => (
            <React.Fragment key={name}>
              <tr style={styles.row} onClick={() => toggleRow(name)}>
                <td style={styles.td}>{name}</td>
                <td style={styles.td}>₹{child.amount}</td>
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
