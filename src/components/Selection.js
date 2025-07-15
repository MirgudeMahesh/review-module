import React, { useState,useContext } from 'react';
import { DisableContext } from './DisableProvider';
import '../styles.css';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { useRole } from './RoleContext';
const data={
  div1: {
    ter1: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
    ter2: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
    ter3: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
     ter4: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
},
div2: {
    ter1: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
    ter2: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
    ter3: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
     ter4: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
},
div3: {
    ter1: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
    ter2: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
    ter3: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
     ter4: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
},
div4: {
    ter1: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
    ter2: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
    ter3: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
     ter4: {
      bh1: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh2: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh3: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] },
      bh4: { bm1: ["be1", "be2", "be3", "be4"], bm2: ["be1", "be2", "be3", "be4"], bm3: ["be1", "be2", "be3", "be4"], bm4: ["be1", "be2", "be3", "be4"] }
    },
}
}


export default function Selection() {
 

  const navigate = useNavigate();
  const [selectedDiv, setSelectedDiv] = useState('');
  const [selectedTer, setSelectedTer] = useState('');
  const [selectedBm, setSelectedBm] = useState('');
  const [selectedBh, setSelectedBh] = useState('');
    const { setDisable } = useContext(DisableContext);

const { role } = useRole();
  const handleBeClick = () => { setDisable(true);navigate('/Home');console.log(role)}
  return (
    <div>
      <Navbar />
      <div className="dropdown-wrapper" >
        <div className="vertical-dropdown">
          <select
            value={selectedDiv}
            onChange={(e) => {
              setSelectedDiv(e.target.value);
              setSelectedTer('');
              setSelectedBm('');
              setSelectedBh('');
            }}
          >
            <option value="">Select Division</option>
            {Object.keys(data).map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>

          {selectedDiv && (
            <select
              value={selectedTer}
              onChange={(e) => {
                setSelectedTer(e.target.value);
                setSelectedBm('');
                setSelectedBh('');
              }}
            >
              <option value="">Select Territory</option>
              {Object.keys(data[selectedDiv]).map((ter) => (
                <option key={ter} value={ter}>
                  {ter}
                </option>
              ))}
            </select>
          )}

{selectedTer && (
  <select
    value={selectedBh}
    onChange={(e) => {
      setSelectedBh(e.target.value);
      setSelectedBm('');
    }}
  >
    <option value="">Select BH</option>
    {Object.keys(data[selectedDiv][selectedTer]).map((bh) => (
      <option key={bh} value={bh}>
        {bh}
      </option>
    ))}
  </select>
)}


{selectedBh && (
  <select
    value={selectedBm}
    onChange={(e) => setSelectedBm(e.target.value)}
  >
    <option value="">Select BM</option>
    {Object.keys(data[selectedDiv][selectedTer][selectedBh]).map((bm) => (
      <option key={bm} value={bm}>
        {bm}
      </option>
    ))}
  </select>
)}



{selectedBm && selectedBh && (
  <ul className="be-list">
    {data[selectedDiv][selectedTer][selectedBh][selectedBm].map((be) => (
      <li key={be} onClick={handleBeClick} style={{ cursor: 'pointer' }}>
        {be}
      </li>
    ))}
  </ul>
)}

         



        </div>
        </div>
       </div>
  );
}
