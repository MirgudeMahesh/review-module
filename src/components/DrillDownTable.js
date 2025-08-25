import React, { useState } from 'react';
import '../styles.css';
import { useRole } from './RoleContext';
import { useNavigate } from 'react-router-dom';

const DrillDownTable = ({ childrenData, level }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const [activePopup, setActivePopup] = useState(null); // track which row's popup is open
  const { setName, setUserRole } = useRole();
  const navigate = useNavigate();

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
      padding: '8px 12px',
      border: '1px solid black',
      verticalAlign: 'top',
      position: 'relative'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
      fontSize: '13px'
    },
    row: {
      cursor: 'pointer'
    },
    popup: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '8px',
      borderRadius: '6px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      zIndex: 1000,
      fontSize: '12px',
      minWidth: '160px'
    },
    popupHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '6px',
      fontWeight: 'bold'
    },
    closeBtn: {
      cursor: 'pointer',
      fontSize:'15px',
      color: '#888',
      marginLeft: '10px'
    },
    questionMark: {
      marginLeft: '6px',
      color: 'black',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  };

  const openprofile = (x) => {
    const selectedChild = childrenData[x];
    if (selectedChild?.territory) {
      localStorage.setItem("territory", selectedChild.territory);
    }
    if (selectedChild?.role) {
      setUserRole(selectedChild.role);
    }
    setName(x);
    navigate(`/profile/${x}/Review`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // helper → format sales consistently
  const getSalesValue = (sales) => {
    if (Array.isArray(sales)) {
      return sales.reduce((sum, s) => sum + (s.sales || 0), 0).toFixed(2);
    }
    return sales ? sales.toFixed(2) : "-";
  };

  return (
    <>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name (Level {level})</th>
            <th style={styles.th}>Efficiency(%)</th>
            <th style={styles.th}>Sales</th>
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
                  {level === 1 ? (
                    <span className="profile-button-disabled">{name}</span>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openprofile(name);
                      }}
                      className="profile-button"
                    >
                      {name}
                    </button>
                  )}
                </td>
                <td style={styles.td}>{child.amount}</td>

                {/* ✅ Sales column with ? popup */}
                <td style={styles.td}>
                  {getSalesValue(child.sales)}

                  {Array.isArray(child.sales) && child.sales.length > 0 && (
                    <>
                      <span
                        style={styles.questionMark}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePopup(activePopup === name ? null : name);
                        }}
                      >
                        ?
                      </span>

                      {activePopup === name && (
                        <div style={styles.popup}>
                          <div style={styles.popupHeader}>
                            <span>Product Sales</span>
                            <span
                              style={styles.closeBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActivePopup(null);
                              }}
                            >
                              ×
                            </span>
                          </div>
                          <ul style={{ margin: 0, paddingLeft: '15px' }}>
                            {child.sales.map((s, idx) => (
                              <li key={idx}>
                                {s.productName}: {s.sales}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </td>
              </tr>

              {expandedRows[name] && child.children && Object.keys(child.children).length > 0 && (
                <tr className="nested">
                  <td colSpan="3" style={{ paddingLeft: '30px' }}>
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
