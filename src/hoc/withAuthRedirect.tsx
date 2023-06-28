import { isAuthSelectors } from '../redux/auth/selectors';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import type { FC } from 'react';
import type { RootState } from '../redux/store';

/*export function withAuthRedirect<T>(WrapComponent: FC<T>) {
  const RedirectComponent: FC<IMapProps> = props => {
    //const { isAuth, ...restProps } = props;

    if (!props.isAuth) {
      return <Navigate to='/' />;
    }

    return <WrapComponent {...props} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
}*/

export interface IMapProps {
  isAuth: boolean;
}

export function withAuthRedirect<T>(WrapComponent: FC<T>) {
  const RedirectComponent: FC<IMapProps> = props => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) {
      return <Navigate to='/' />;
    }

    // @ts-ignore
    return <WrapComponent {...restProps} />;
  };

  return connect(mapStateToProps)(RedirectComponent);
}

const mapStateToProps = (state: RootState) => ({
  isAuth: isAuthSelectors(state),
});
