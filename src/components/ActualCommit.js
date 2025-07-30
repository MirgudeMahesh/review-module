import React, { useState } from 'react';

export default function ActualCommit() {
  const [date, setDate] = useState(''); // For the first row only

  return (
    <div className='commitmenta'>
      <div className='commit-padding'>
        <h3 style={{ textAlign: 'center' }}>Commitment</h3>
        <div>
          <table className="custom-table-commit">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Name</th>
                <th>Commitment</th>
                <th>Received Date</th>
                <th>Deadline Date</th>
                <th>Action Date</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td>{index === 0 ? 'Team Performance' : ''}</td>
                  <td>{index === 0 ? 'Mahesh Kumar' : ''}</td>
                  <td>{index === 0 ? '5 requests are pending fill this immediately' : ''}</td>
                  <td>{index === 0 ? '01-04-2024' : ''}</td>
                  <td>{index === 0 ? '05-04-2024' : ''}</td>
                  <td>
                    {index === 0 ? (
                      date ? (
                        <p>{date}</p>
                      ) : (
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          style={{ borderRadius: '5px' }}
                        />
                      )
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     </div>
  );
}
