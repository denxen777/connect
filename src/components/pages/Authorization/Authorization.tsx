import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../../redux/auth/asyncAction';
import {
  authIdSelectors,
  isAuthSelectors,
} from '../../../redux/auth/selectors';

import type { FC } from 'react';
import type { IAuthorizationForm } from './types';
import type { SubmitHandler } from 'react-hook-form';
import type { ConnectedProps } from 'react-redux';
import type { RootState } from '../../../redux/store';

const mapStateToProps = (state: RootState) => ({
  authId: authIdSelectors(state),
  isAuth: isAuthSelectors(state),
});

const Authorization: FC<TAuthorization> = ({ authId, isAuth, login }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm<IAuthorizationForm>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IAuthorizationForm> = data => {
    login(data);
    reset();
  };

  if (isAuth) {
    return <Navigate to={`profile/${authId}`} />;
  }

  return (
    <Row className='justify-content-center'>
      <Col md={9} lg={6}>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Адрес эл. почты</Form.Label>
            <Form.Control
              type='email'
              isValid={touchedFields.email && !errors.email}
              isInvalid={!!errors.email}
              {...register('email', {
                required: true,
              })}
              placeholder='Введите адрес эл. почты'
            />
            <Form.Control.Feedback type='invalid'>
              Поле обязательно для заполнения.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type='password'
              isValid={touchedFields.password && !errors.password}
              isInvalid={!!errors.password}
              {...register('password', {
                required: true,
              })}
              placeholder='Введите пароль'
            />
            <Form.Control.Feedback type='invalid'>
              Поле обязательно для заполнения.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              {...register('rememberMe')}
              label='Сохранить вход'
            />
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            onClick={handleSubmit(onSubmit)}
          >
            Войти
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

const connector = connect(mapStateToProps, { login });

type TAuthorization = ConnectedProps<typeof connector>;

export default connector(Authorization);
