import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RoleProvider } from './components/RoleContext';
// import '@syncfusion/ej2-base/styles/material.css';
// import '@syncfusion/ej2-buttons/styles/material.css';
// import '@syncfusion/ej2-calendars/styles/material.css';
// import '@syncfusion/ej2-dropdowns/styles/material.css';
// import '@syncfusion/ej2-grids/styles/material.css';
// import '@syncfusion/ej2-charts/styles/material.css';
// import '@syncfusion/ej2-inputs/styles/material.css';
// import '@syncfusion/ej2-lists/styles/material.css';
// import '@syncfusion/ej2-navigations/styles/material.css';
// import '@syncfusion/ej2-popups/styles/material.css';
// import '@syncfusion/ej2-splitbuttons/styles/material.css';
// import '@syncfusion/ej2-pivotview/styles/material.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <RoleProvider>
      <App />
    </RoleProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
