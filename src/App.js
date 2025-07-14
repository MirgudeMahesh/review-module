
import './App.css';
import Loginpage from './components/Loginpage';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
function App() {
  return (
    <div >
      <Router>
   
      <Routes>
        <Route exact path='/' element={<Loginpage/>}/>
    <Route exact path='/Home' element={<Home/>}/>
     </Routes>
      </Router>
    </div>
  );
}

export default App;
