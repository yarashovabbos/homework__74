// src/components/Profile.jsx
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Profile = ({ username }) => (
  <ProfileContainer>
    <h2>Profile</h2>
    <p>Username: {username}</p>
    <button>Logout</button>
  </ProfileContainer>
);

export default Profile;
