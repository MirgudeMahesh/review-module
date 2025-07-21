
import './App.css';
import Loginpage from './components/Loginpage';
import Home from './components/Home';
import Miscfiles from './components/Miscfiles';
import Performance from './components/Performance';
import Selection from './components/Selection';
import { DisableProvider } from './components/DisableProvider';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Commitment from './components/Commitment';

import FinalReport from './components/FinalReport';

function App() {
  return (
    <div className='overflow' >

      {/* <RoleProvider> */}
      <DisableProvider>
        <Router>

          <Routes>
             <Route exact path='/Review' element={<FinalReport/>} />
            <Route exact path='/' element={<Loginpage/>} />
            <Route exact path='/Performance' element={<Home/>} />
            <Route exact path='/TeamBuild' element={<Performance/>} />
            <Route exact path='/Hygine' element={<Miscfiles/>} />
            <Route exact path='/Compliance' element={<Commitment/>} />
            <Route exact path='/Selection' element={<Selection/>} />

       <Route exact path='/profile/:name/Review' element={<FinalReport/>} />
            <Route exact path='/profile/:name/Performance' element={<Home/>} />
            <Route exact path='/profile/:name/TeamBuild' element={<Performance/>} />
            <Route exact path='/profile/:name/Hygine' element={<Miscfiles/>} />
            <Route exact path='/profile/:name/Compliance' element={<Commitment/>} />


           
          </Routes>
        </Router>
      </DisableProvider>
      {/* </RoleProvider>  */}

    </div>
  );
}

export default App;
