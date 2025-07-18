
import './App.css';
import Loginpage from './components/Loginpage';
import Home from './components/Home';
import Miscfiles from './components/Miscfiles';
import Performance from './components/Performance';
import Selection from './components/Selection';
import { DisableProvider } from './components/DisableProvider';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Commitment from './components/Commitment';
import { RoleProvider, RoleSelection } from './components/RoleContext';
import MyProfile from './components/MyProfile';
import ActualCommit from './components/ActualCommit';
import FinalReport from './components/FinalReport';

function App() {
  return (
    <div >
      {/* <RoleProvider> */}
      <DisableProvider>
      <Router>
   
      <Routes>
        <Route exact path='/' element={<Loginpage/>}/>
    <Route exact path='/Home' element={<Home/>}/>
    <Route exact path='/performance' element={<Performance/>}/>
    <Route exact path='/Miscellaneous' element={<Miscfiles/>}/>
     <Route exact path='/Commitment' element={<Commitment/>}/>
          <Route exact path='/Selection' element={<Selection/>}/>
<Route exact path='/MyProfile' element={<MyProfile/>}/>
   <Route exact path='/Review' element={<FinalReport/>}/>
     </Routes>
      </Router>
      </DisableProvider>
      {/* </RoleProvider>  */}
     
    </div>
  );
}

export default App;
