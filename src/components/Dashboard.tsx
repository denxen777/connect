import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from './Header';

export const Dashboard = () => (
  <div className='mb-3'>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </div>
);
