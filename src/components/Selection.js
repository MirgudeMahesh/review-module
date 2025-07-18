import React, { useState,useContext } from 'react';
import '../styles.css';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
// import { useRole } from './RoleContext';
import { DisableContext } from './DisableProvider';

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
  const [selectedDiv, setSelectedDiv] = useState('');
  const [selectedTer, setSelectedTer] = useState('');
  const [selectedBh, setSelectedBh] = useState('');
  const [selectedBm, setSelectedBm] = useState('');
  

    const { disable, setDisable } = useContext(DisableContext);
  const navigate = useNavigate();
  const role= localStorage.getItem('role') ;
  const logout = () => {localStorage.removeItem('role');navigate('/')}
  const handleBeClick = (x) => { setDisable(true);navigate('/Home');console.log("speaical")}

  return (
        <div>
      <Navbar />
      <div className="dropdown-wrapper">
        <div className="vertical-dropdown">
          <ul className="nested-list">
            {Object.keys(data).map((div) => (
              <li key={div}>
                <div className="link-group">
                  <span
                    className="item-link level-div"
                    onClick={() => handleBeClick('be')}
                  >
                    {div}
                  </span>
                  <span
                    className="toggle-arrow"
                    onClick={() =>
                      setSelectedDiv(selectedDiv === div ? '' : div)
                    }
                  >
                    ▶
                  </span>
                </div>

                {/* Territory List */}
                {selectedDiv === div && (
                  <ul className="nested-list">
                    {Object.keys(data[div]).map((ter) => (
                      <li key={ter}>
                        <div className="link-group">
                          <span
                            className="item-link level-ter"
                            onClick={() => handleBeClick('be')}
                          >
                            {ter}
                          </span>
                          <span
                            className="toggle-arrow"
                            onClick={() =>
                              setSelectedTer(selectedTer === ter ? '' : ter)
                            }
                          >
                            ▶
                          </span>
                        </div>

                        {/* BH List */}
                        {selectedTer === ter && (
                          <ul className="nested-list">
                            {Object.keys(data[div][ter]).map((bh) => (
                              <li key={bh}>
                                <div className="link-group">
                                  <span
                                    className="item-link level-bh"
                                    onClick={() => handleBeClick('be')}
                                  >
                                    {bh}
                                  </span>
                                  <span
                                    className="toggle-arrow"
                                    onClick={() =>
                                      setSelectedBh(selectedBh === bh ? '' : bh)
                                    }
                                  >
                                    ▶
                                  </span>
                                </div>

                                {/* BM List */}
                                {selectedBh === bh && (
                                  <ul className="nested-list">
                                    {Object.keys(data[div][ter][bh]).map((bm) => (
                                      <li key={bm}>
                                        <div className="link-group">
                                          <span
                                            className="item-link level-bm"
                                            onClick={() => handleBeClick('be')}
                                          >
                                            {bm}
                                          </span>
                                          <span
                                            className="toggle-arrow"
                                            onClick={() =>
                                              setSelectedBm(selectedBm === bm ? '' : bm)
                                            }
                                          >
                                            ▶
                                          </span>
                                        </div>

                                        {/* BE List */}
                                        {selectedBm === bm && (
                                          <ul className="nested-list">
                                            {Object.entries(
                                              data[div][ter][bh][bm]
                                            ).map(([blKey, blList]) => (
                                              <li key={blKey}>
                                                <div className="link-group">
                                                  <span
                                                    className="item-link level-be"
                                                    onClick={() => handleBeClick('be')}
                                                  >
                                                    {blKey}
                                                  </span>
                                                  <span
                                                    className="toggle-arrow"
                                                    onClick={() =>
                                                      {} // Optional: add expand logic for BLs
                                                    }
                                                  >
                                                    ▶
                                                  </span>
                                                </div>

                                                {/* BL List */}
                                                <ul className="nested-list">
                                                  {blList.map((bl) => (
                                                    <li key={bl}>
                                                      <span
                                                        className="item-link level-bl"
                                                        onClick={() => handleBeClick('bl')}
                                                      >
                                                        {bl}
                                                      </span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={logout}>logout</button>
    </div>

  );
}

export default Selection;
