import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend
    axios.get('https://serverhandle.vercel.app/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const formatArray = (arr) => {
    if (!arr || arr.length === 0) return 'Not provided';
    return Array.isArray(arr) ? arr.join(', ') : arr;
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const closeOverlay = () => {
    setSelectedUser(null);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Members Dashboard</h1>
      {users.length > 0 ? (
        <div
          className="membercontainer"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          {users.map((user, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                cursor: 'pointer',
                textAlign: 'center',
                width: '200px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              onClick={() => handleUserClick(user)}
            >
              <img
                src={user.imageUrl}
                alt="Profile"
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
              <h2 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{user.fullName}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      {selectedUser && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              maxWidth: '90vh',
              width: '100%',
              overflowY:"auto",
            }}
          >
            <div className='membercontainer'>
                <div>
                <img
                src={selectedUser.imageUrl}
                alt="Profile"
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
                <h2>{selectedUser.fullName}</h2>
            <p><strong>UID:</strong> {selectedUser.UID}</p>
            <p><strong>Department:</strong> {selectedUser.department}</p>
            <p><strong>Year:</strong> {selectedUser.year}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone Number:</strong>{selectedUser.phoneNumber}</p>
            </div>
            <div>
            <p><strong>Technical Skills:</strong> {formatArray(selectedUser.technicalSkills)}</p>
            <p><strong>Soft Skills:</strong> {selectedUser.softSkills || 'Not provided'}</p>
            <p><strong>Certifications:</strong> {selectedUser.certifications || 'Not provided'}</p>
            <p><strong>Extracurricular Activities:</strong> {selectedUser.extracurricularActivities || 'Not provided'}</p>
            <p><strong>Previous Positions:</strong> {selectedUser.previousPositions || 'Not provided'}</p>
            <p><strong>Achievements:</strong> {selectedUser.achievements || 'Not provided'}</p>
            <p><strong>Preferred Role:</strong> {selectedUser.preferredRole || 'Not provided'}</p>
            <p><strong>Languages:</strong> {formatArray(selectedUser.languages)}</p>
            <p><strong>Special Skills:</strong> {selectedUser.specialSkills || 'Not provided'}</p>
            <p><strong>Suggestions:</strong> {selectedUser.suggestions || 'Not provided'}</p>
            <p><strong>Feedback:</strong> {selectedUser.feedback || 'Not provided'}</p>
                </div>
            </div>
            
            <p>
              <strong>CV/Portfolio:</strong>{' '}
              <a href={selectedUser.cvPortfolioUrl} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </p>
            <button
              onClick={closeOverlay}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
