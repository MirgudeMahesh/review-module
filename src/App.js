
import './App.css';
import Loginpage from './components/Loginpage';
// import Example from './components/Example';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
function App() {
  return (
    <div >
      <Router>
   
      <Routes>
        <Route exact path='/' element={<Loginpage/>}/>
    {/* <Route exact path='/Example' element={<Example/>}/> */}
     </Routes>
      </Router>
    </div>
  );
}

export default App;
