import './App.css';
import Loginpage from './components/Loginpage';

import Selection from './components/Selection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import { useRole } from './components/RoleContext';

function App() {
  const { role } = useRole();

  return (
    <div className='overflow'>
      <Router>
        <Layout>
          <Routes>
           
              <Route path="/" element={<Loginpage/>} /> 


 <Route path="/selection" element={<Selection />} />


         

           
          
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
