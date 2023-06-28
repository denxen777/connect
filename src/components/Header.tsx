import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

import logo from '../assets/img/logo.png';
import { logout } from '../redux/auth/asyncAction';
import { authIdSelectors, isAuthSelectors } from '../redux/auth/selectors';
import { userSelector } from '../redux/profile/selectors';

import type { FC } from 'react';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../redux/store';

const mapStateToProps = (state: RootState) => ({
  user: userSelector(state),
  authId: authIdSelectors(state),
  isAuth: isAuthSelectors(state),
});

const Header: FC<THeader> = ({ user, authId, isAuth, logout }) => {
  const { pathname } = useLocation();

  return (
    <Navbar variant='light' expand='md'>
      <Container fluid={true} className='shadow mb-5 rounded px-4 pb-2'>
        <Navbar.Brand
          as={Link}
          to='/profile'
          className='d-flex align-items-center'
        >
          <Image src={logo} />
          <h2 className='mx-4'>Connect</h2>
        </Navbar.Brand>
        {isAuth && <Navbar.Toggle aria-controls='navbar' />}
        {isAuth && (
          <Navbar.Collapse id='navbar'>
            <Nav className='me-auto'>
              <Nav.Link
                as={Link}
                to={`profile/${authId}`}
                active={
                  pathname === `/profile/${user?.userId}` ||
                  pathname === '/profile'
                }
              >
                Профиль
              </Nav.Link>
              <Nav.Link
                as={Link}
                to='/friends'
                active={pathname === '/friends'}
              >
                Друзья
              </Nav.Link>
              <Nav.Link as={Link} to='/users' active={pathname === '/users'}>
                Пользователи
              </Nav.Link>
            </Nav>
            <Button onClick={() => logout()}>Выход</Button>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

const connector = connect(mapStateToProps, { logout });

type THeader = ConnectedProps<typeof connector>;

export default connector(Header);
