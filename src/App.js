import './App.css';
import Loginpage from './components/Loginpage';
import Home from './components/Home';
import Miscfiles from './components/Miscfiles';
import Performance from './components/Performance';
import Selection from './components/Selection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Commitment from './components/Commitment';
import FinalReport from './components/FinalReport';
import Layout from './components/Layout';
import Chats from './components/dashboard/Chats';
import UserHome from './components/dashboard/UserHome';
import UserFinalReport from './components/dashboard/UserFinalReport';
import UserPerformance from './components/dashboard/UserPerformance';
import UserMiscfiles from './components/dashboard/UserMiscfiles';
import UserCommitment from './components/dashboard/UserCommitment';
import MyChats from './components/MyChats';
import Filtering from './components/Filtering';
import { useRole } from './components/RoleContext';

function App() {
  const { role } = useRole();

  return (
    <div className='overflow'>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/Disclosure' element={<Filtering/>} />
              <Route path="/" element={<Loginpage/>} /> 


 <Route path="/selection" element={<Selection />} />


         

           
          
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
