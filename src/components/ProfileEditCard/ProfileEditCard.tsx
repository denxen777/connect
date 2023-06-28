import { Button, Form, FormControl, ListGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import type { FC } from 'react';
import type { IProfileEditCard, IProfileEditForm } from './types';

export const ProfileEditCard: FC<IProfileEditCard> = ({
  user,
  setEditMode,
  updateUserData,
}) => {
  const {
    fullName,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
  } = user;

  const { register, handleSubmit } = useForm<IProfileEditForm>({
    defaultValues: {
      fullName,
      aboutMe,
      lookingForAJob,
      lookingForAJobDescription,
      contacts: {
        github: contacts.github,
        vk: contacts.vk,
      },
    },
  });

  const onSaveClick = (userData: IProfileEditForm) => {
    setEditMode(false);
    updateUserData(userData);
  };

  return (
    <div className='d-flex flex-column gap-3'>
      <ListGroup as='ul' variant='flush' className='text-start'>
        <ListGroup.Item as='li' className='px-0'>
          <FormControl placeholder='Имя' {...register('fullName')} />
        </ListGroup.Item>
        <ListGroup.Item as='li' className='px-0'>
          <FormControl placeholder='Обо мне' {...register('aboutMe')} />
        </ListGroup.Item>
        <ListGroup.Item as='li' className='px-0'>
          <FormControl
            placeholder='Технологии'
            {...register('lookingForAJobDescription')}
          />
        </ListGroup.Item>
        <ListGroup.Item as='li' className='px-0'>
          <FormControl placeholder='Я в VK' {...register('contacts.vk')} />
        </ListGroup.Item>
        <ListGroup.Item as='li' className='px-0'>
          <FormControl
            placeholder='Я в GitHub'
            {...register('contacts.github')}
          />
        </ListGroup.Item>
        <ListGroup.Item as='li' className='px-0'>
          <Form.Check
            type='checkbox'
            id={'checkbox'}
            label='Ищу работу'
            {...register('lookingForAJob')}
          />
        </ListGroup.Item>
      </ListGroup>
      <Button style={{ width: 200 }} onClick={handleSubmit(onSaveClick)}>
        Сохранить
      </Button>
    </div>
  );
};
