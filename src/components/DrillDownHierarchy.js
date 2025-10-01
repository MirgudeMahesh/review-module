import React, { useEffect, useState } from 'react';
import DrillDownTable from './DrillDownTable';

const DrillDownHierarchy = () => {
  const [data, setData] = useState(null);
  const empterr = localStorage.getItem("empterr"); // read territory from localStorage

  useEffect(() => {
    if (!empterr) return;

    fetch(`https://review-module-backend-3.onrender.com/hierarchy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ empterr })
    })
      .then((res) => res.json())
      .then((actual) => setData(actual))
      .catch((err) => console.error(err));
  }, [empterr]);

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        border: '1px solid black',
        overflowY: 'scroll',
        height: '60vh',
        marginLeft: '50px',
        marginRight: '50px',
        marginTop: '100px'
      }}
    ><h2>Primary Sales</h2>
      {data ? (
        <DrillDownTable childrenData={data} level={1} />
      ) : (
        <p>Loading hierarchy...</p>
      )}
    </div>
  );
};

export default DrillDownHierarchy;
