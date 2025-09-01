import React, { useEffect, useState } from 'react';
import DrillDownTable from './DrillDownTable';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DrillDownHierarchy = () => {
   const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const empCode = queryParams.get("empCode");
  const [data, setData] = useState(null);

useEffect(() => {
    if (!empCode) return;

    // ✅ Use your backend running on localhost:3000
    fetch(`https://review-module-backend-3.onrender.com/hierarchy/${empCode}`)
      .then((res) => res.json())
      .then((actual) => setData(actual))
      .catch((err) => console.error(err));
  }, [empCode]);

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
