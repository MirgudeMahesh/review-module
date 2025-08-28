import React, { useEffect, useState } from 'react';
import DrillDownTable from './DrillDownTable';

const DrillDownHierarchy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const empName = localStorage.getItem('user'); // logged in employee
    fetch(`https://review-module-backend-2.onrender.com/hierarchy/${empName}`)
      .then(res => res.json())
      .then(actual => setData(actual))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', border:'1px solid black', overflowY:'scroll', height:'60vh', marginLeft:'50px', marginRight:'50px', marginTop:'100px' }}>
      <h2>Hierarchy View (BH → BL → BM → BE)</h2>
      {data ? (
        <DrillDownTable childrenData={data} level={1} />
      ) : (
        <p>Loading hierarchy...</p>
      )}
    </div>
  );
};

export default DrillDownHierarchy;
