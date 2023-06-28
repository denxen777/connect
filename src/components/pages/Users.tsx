import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { compose } from 'redux';

import { UserCard } from '../UserCard';
import { PaginationComponent } from '../PaginationComponent/PaginationComponent';
import {
  getUsers,
  subscribe,
  unsubscribe,
} from '../../redux/users/asyncActions';
import { setCurrentPage } from '../../redux/users/actions';
import {
  currentPageSelector,
  totalCountSelector,
  usersSelector,
} from '../../redux/users/selectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import type { RootState } from '../../redux/store';
import type { FC } from 'react';
import type { ConnectedProps } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  users: usersSelector(state),
  totalCount: totalCountSelector(state),
  currentPage: currentPageSelector(state),
});

const Users: FC<TUsers> = ({
  users,
  totalCount,
  currentPage,
  getUsers,
  setCurrentPage,
  subscribe,
  unsubscribe,
}) => {
  const { pathname } = useLocation();
  let isMounted = false;

  useEffect(() => {
    getUsers(currentPage, pathname);
    isMounted = true;
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    } else {
      if (!isMounted) {
        getUsers(currentPage, pathname);
      }
    }
  }, [pathname]);

  return (
    <div style={{ width: '90%' }} className='mx-auto'>
      <h1 className='text-center mb-4'>
        {pathname === '/users' ? 'Пользователи' : 'Друзья'}
      </h1>
      <Row>
        {users?.map(user => (
          <UserCard
            key={user.id}
            user={user}
            subscribe={subscribe}
            unsubscribe={unsubscribe}
          />
        ))}
      </Row>
      {users && (
        <PaginationComponent
          currentPage={currentPage}
          totalCount={totalCount}
          onClickSelectedPage={(page: number) => setCurrentPage(page)}
          onClickFirstPage={() => setCurrentPage(1)}
          onClickLastPage={() => setCurrentPage(Math.ceil(totalCount / 8))}
          onClickNextPage={() => setCurrentPage(currentPage + 1)}
          onClickPrevPage={() => setCurrentPage(currentPage - 1)}
        />
      )}
    </div>
  );
};

const connector = connect(mapStateToProps, {
  getUsers,
  setCurrentPage,
  subscribe,
  unsubscribe,
});

type TUsers = ConnectedProps<typeof connector>;

export default compose(connector, withAuthRedirect<TUsers>)(Users);
