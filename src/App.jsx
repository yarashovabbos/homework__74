import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/pages/Header';
import Login from './components/pages/Login';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
`;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <AppContainer>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <StudentList /> : <Login setIsAuthenticated={setIsAuthenticated} />
            }
          />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/profile"
            element={
              <>
                <Login setIsAuthenticated={setIsAuthenticated} />
                <button onClick={handleLogout}>Logout</button>
              </>
            }
          />
          <Route path="/todo" element={<h2>Todo Page</h2>} />
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
