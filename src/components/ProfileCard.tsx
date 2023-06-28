import { ListGroup } from 'react-bootstrap';

import type { FC } from 'react';
import type { IUserProfile } from '../redux/profile/types';

interface IProfileCard {
  user: IUserProfile;
}

export const ProfileCard: FC<IProfileCard> = ({ user }) => (
  <ListGroup as='ul' variant='flush' className='text-start'>
    <ListGroup.Item as='li'>
      <b>Имя : </b>
      {user?.fullName}
    </ListGroup.Item>
    <ListGroup.Item as='li'>
      <b>Обо мне : </b>
      {user?.aboutMe}
    </ListGroup.Item>
    <ListGroup.Item as='li'>
      <b>Технологии : </b>
      {user?.lookingForAJobDescription}
    </ListGroup.Item>
    <ListGroup.Item as='li'>
      <b>Ищу работу : </b> {user?.lookingForAJob ? 'Да' : 'Нет'}
    </ListGroup.Item>
    <ListGroup.Item as='li'>
      <b>Я в VK : </b>
      {user?.contacts.vk}
    </ListGroup.Item>
    <ListGroup.Item as='li'>
      <b>Я в GitHub : </b>
      {user?.contacts.github}
    </ListGroup.Item>
  </ListGroup>
);
