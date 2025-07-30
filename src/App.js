
import './App.css';
import Loginpage from './components/Loginpage';
import Home from './components/Home';
import Miscfiles from './components/Miscfiles';
import Performance from './components/Performance';
import Selection from './components/Selection';
import { RoleProvider } from './components/RoleContext';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Commitment from './components/Commitment';

import FinalReport from './components/FinalReport';
import Layout from './components/Layout';
import Chats from './components/Chats';
import UserHome from './components/dashboard/UserHome';
import UserFinalReport from './components/dashboard/UserFinalReport';
import UserPerformance from './components/dashboard/UserPerformance';
import UserMiscfiles from './components/dashboard/UserMiscfiles';
import UserCommitment from './components/dashboard/UserCommitment';
function App() {
  return (
    <div className='overflow' >

      <RoleProvider>
 
        <Router>
<Layout>
          <Routes>
             <Route exact path='/Review' element={<FinalReport/>} />
            <Route exact path='/' element={<Loginpage/>} />
            <Route exact path='/Performance' element={<Home/>} />
            <Route exact path='/TeamBuild' element={<Performance/>} />
            <Route exact path='/Hygine' element={<Miscfiles/>} />
            <Route exact path='/Compliance' element={<Commitment/>} />
            <Route exact path='/Selection' element={<Selection/>} />
   <Route exact path='/Chats' element={<Chats/>} />
       <Route exact path='/profile/:name/Review' element={<UserFinalReport/>} />
            <Route exact path='/profile/:name/Performance' element={<UserHome/>} />
            <Route exact path='/profile/:name/TeamBuild' element={<UserPerformance/>} />
            <Route exact path='/profile/:name/Hygine' element={<UserMiscfiles/>} />
            <Route exact path='/profile/:name/Compliance' element={<UserCommitment/>} />


           
          </Routes>
             </Layout>
        </Router>
 
      </RoleProvider> 

    </div>
  );
}

export default App;
