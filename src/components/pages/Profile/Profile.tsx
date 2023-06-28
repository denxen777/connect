import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

import defaultAva from '../../../assets/img/default_ava.png';
import {
  getStatus,
  getUser,
  updatePhoto,
  updateStatus,
  updateUserData,
} from '../../../redux/profile/asyncActions';
import {
  statusUserSelector,
  userSelector,
} from '../../../redux/profile/selectors';
import { ProfileEditCard } from '../../ProfileEditCard/ProfileEditCard';
import { ProfileCard } from '../../ProfileCard';
import { authIdSelectors } from '../../../redux/auth/selectors';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

import type { FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import type { RootState } from '../../../redux/store';
import type { IProfileStatusForm } from './types';
import type { ConnectedProps } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  user: userSelector(state),
  status: statusUserSelector(state),
  authId: authIdSelectors(state),
});

const Profile: FC<TProfile> = ({
  user,
  status,
  authId,
  getUser,
  updatePhoto,
  getStatus,
  updateStatus,
  updateUserData,
}) => {
  let { userId } = useParams<{ userId?: string }>();
  const [editMode, setEditMode] = useState(false);

  const { register, handleSubmit } = useForm<IProfileStatusForm>({
    defaultValues: {
      status,
    },
    values: { status },
  });

  useEffect(() => {
    if (!userId) {
      userId = authId.toString();
    }
    getUser(Number(userId));
    getStatus(Number(userId));
  }, [userId]);

  const onChangePhoto = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const files = (e.target as HTMLInputElement).files;
    if (files) {
      updatePhoto(files[0]);
    }
  };

  const onSubmit: SubmitHandler<IProfileStatusForm> = data => {
    if (status !== data.status) {
      updateStatus(data);
    }
  };

  return (
    <Row className='justify-content-center text-center gap-4 '>
      <h1 className='text-center mb-4'>Профиль</h1>
      <Col
        style={{ width: 330 }}
        lg='auto'
        className='d-flex flex-column align-items-center gap-3'
      >
        <Image
          src={user?.photos.large || defaultAva}
          fluid={true}
          rounded={true}
          className='d-block'
        />
        {user?.userId === authId && (
          <>
            <Button
              className='w-100'
              onClick={() => setEditMode(true)}
              disabled={editMode}
            >
              Редактировать
            </Button>
            <Form.Group
              controlId='formFile'
              className='mb-3 text-start border-2 border-top'
            >
              <Form.Label>Обновить фотографию</Form.Label>
              <Form.Control type='file' onChange={e => onChangePhoto(e)} />
            </Form.Group>
          </>
        )}
      </Col>
      <Col lg={6}>
        <Form.Control
          as='textarea'
          disabled={user?.userId !== authId}
          className='mb-3'
          style={{ resize: 'none' }}
          aria-label='Small'
          aria-describedby='inputGroup-sizing-sm'
          {...register('status')}
          onBlur={handleSubmit(onSubmit)}
        />
        <Card>
          <Card.Header>Моя карточка</Card.Header>
          <Card.Body>
            {!editMode
              ? user && <ProfileCard user={user} />
              : user && (
                  <ProfileEditCard
                    user={user}
                    setEditMode={setEditMode}
                    updateUserData={updateUserData}
                  />
                )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

const connector = connect(mapStateToProps, {
  getUser,
  getStatus,
  updatePhoto,
  updateStatus,
  updateUserData,
});

type TProfile = ConnectedProps<typeof connector>;

export default compose(connector, withAuthRedirect<TProfile>)(Profile);
