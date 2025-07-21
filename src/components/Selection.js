import React, { useState } from 'react';
import '../styles.css';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";



const data={
  div1: {
    ter1: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
    ter2: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
    ter3: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
     ter4: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
},
div2: {
    ter1: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
    ter2: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
    ter3: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
     ter4: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
},
div3: {
    ter1: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
    ter2: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
    ter3: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
     ter4: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
},
div4: {
    ter1: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
    ter2: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
    ter3: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
     ter4: {
      bh1: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh2: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh3: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] },
      bh4: { bl1: ["be1", "be2", "be3", "be4"], bl2: ["be1", "be2", "be3", "be4"], bl3: ["be1", "be2", "be3", "be4"], bl4: ["be1", "be2", "be3", "be4"] }
    },
}
}


function Selection() {
  const profileView =(x)=>{
    localStorage.setItem('name',x);
     navigate(`/profile/${x}/Review`);
  }
  const [selectedDiv, setSelectedDiv] = useState('');
  const [selectedTer, setSelectedTer] = useState('');
  const [selectedBh, setSelectedBh] = useState('');
  const [selectedBm, setSelectedBm] = useState('');
  

    
  const navigate = useNavigate();
 
  const logout = () => {localStorage.removeItem('role');navigate('/');localStorage.removeItem('name');}
  const handleBeClick = (x) => { navigate('/Home');console.log("speaical")}


  return (
        <div>
      <Navbar />
<div style={{justifyContent:'center',alignItems:'center',marginTop:'200px'}}>
    <ul style={{border:'1px solid black', padding:'20px' ,width:"300px",alignItems:'center'}}>
<button style={{listStyleType:'none'}}  onClick={()=>profileView('robert')}><li >robert</li></button>
<button style={{listStyleType:'none'}}><li>Andrew</li></button>
<button style={{listStyleType:'none'}}><li>Williams</li></button>
      </ul></div>
      <button onClick={logout}>logout</button>
    </div>

  );
}

export default Selection;
