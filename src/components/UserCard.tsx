import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import defaultAva from '../assets/img/default_ava.png';

import type { FC } from 'react';
import type { IUser } from '../redux/users/types';

interface IUserCard {
  user: IUser;
  subscribe: (userId: number) => void;
  unsubscribe: (userId: number) => void;
}

export const UserCard: FC<IUserCard> = ({ user, subscribe, unsubscribe }) => (
  <Col
    sm={6}
    md={4}
    lg={3}
    className='d-flex justify-content-center text-center mb-3'
  >
    <Card style={{ width: '13rem' }}>
      <Card.Link to={`/profile/${user.id}`} as={Link}>
        <Card.Img variant='top' src={user.photos.large || defaultAva} />
      </Card.Link>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        {!user.followed ? (
          <Button
            className='w-100'
            size='sm'
            variant='primary'
            onClick={() => subscribe(user.id)}
          >
            Подписаться
          </Button>
        ) : (
          <Button
            className='w-100'
            size='sm'
            variant='primary'
            onClick={() => unsubscribe(user.id)}
          >
            Отписаться
          </Button>
        )}
      </Card.Body>
    </Card>
  </Col>
);
