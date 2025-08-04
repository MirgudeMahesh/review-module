import React from 'react';
import DrillDownTable from './DrillDownTable';
import hierarchyData from './hierarchyData';

const DrillDownHierarchy = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' ,border:'1px solid black',overflowY:'scroll',height:'60vh',marginLeft:'50px',marginRight:'50px',marginTop:'100px',}}>
      <h2>Hierarchy View (BH → BL → BM → BE)</h2>
      <DrillDownTable childrenData={hierarchyData} level={1} />
    </div>
  );
};

export default DrillDownHierarchy;
