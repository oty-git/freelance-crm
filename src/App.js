import './App.css';
import {Switch, Route} from 'react-router-dom';
import routes from './routes';
import {useDispatch} from 'react-redux';
import {
  getLanguages,
  getCurrencies,
  getServices,
  getAppLanguages,
} from './store/actions/init';
import React, {useEffect} from 'react';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
    dispatch(getAppLanguages());
    dispatch(getCurrencies());
    dispatch(getServices());
  }, [dispatch]);

  return (
    <Switch>
      {routes.map((route) => {
        let componentProps = route.props !== undefined ? route.props : {};
        let RouteComponent = route.component;
        route.private = true;

        return route.private ? (
          <PrivateRoute
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={RouteComponent}
          />
        ) : (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={(routeProps) => (
              <RouteComponent {...routeProps} {...componentProps} />
            )}
          />
        );
      })}
    </Switch>
  );
};

export default App;
