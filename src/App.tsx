import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import { getAuthUserData } from './redux/auth/asyncAction';
import { Dashboard } from './components/Dashboard';
import { isInitializedSelectors } from './redux/auth/selectors';
import { Preloader } from './components/Preloader/Preloader';

import type { FC } from 'react';
import type { RootState } from './redux/store';
import type { ConnectedProps } from 'react-redux';

const Profile = lazy(() => import('./components/pages/Profile/Profile'));
const Users = lazy(() => import('./components/pages/Users'));
const Authorization = lazy(
  () => import('./components/pages/Authorization/Authorization')
);

const mapStateToProps = (state: RootState) => ({
  isInitialized: isInitializedSelectors(state),
});

const App: FC<TApp> = ({ isInitialized, getAuthUserData }) => {
  useEffect(() => {
    getAuthUserData();
  }, []);

  if (!isInitialized) {
    return <Preloader />;
  }

  return (
    <div className='mb-3'>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path='profile/:userId?' element={<Profile />} />
            <Route path='friends' element={<Users />} />
            <Route path='users' element={<Users />} />
            <Route path='' element={<Authorization />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

const connector = connect(mapStateToProps, { getAuthUserData });

type TApp = ConnectedProps<typeof connector>;

export default connector(App);
