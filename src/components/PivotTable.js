import React from 'react';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from '../data/pivotData';

const PivotTable = () => {
  const dataSourceSettings = {
    dataSource: pivotData,
    expandAll: false,
    columns: [
      { name: 'Year', caption: 'Production Year' },
      { name: 'Quarter' }
    ],
    values: [
      { name: 'Sold', caption: 'Units Sold' },
      { name: 'Amount', caption: 'Sold Amount' }
    ],
    rows: [
      { name: 'Country' },
      { name: 'Products' }
    ],
    filters: [],
   drilledMembers: [
  { name: 'Country', items: ['USA', 'India', 'Japan'] },
  { name: 'Products', items: ['Laptop', 'Phone', 'Tablet'] }
]

  };

  return (
    <PivotViewComponent
      id="PivotTable"
      height={350}
      dataSourceSettings={dataSourceSettings}
    />
  );
};

export default PivotTable;
