import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import 'src/assets/scss/style.scss';

import Fallback from 'src/components/Fallback';
import NotFound from 'src/components/404';
import Header from 'src/components/Header';

// Pages
const Home = lazy(() => import('../Home'));
const About = lazy(() => import('src/views/About'));

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<Fallback />}>
          <Switch>
            {/* Page routes */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

            {/* Default 404 */}
            <Route render={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default withRouter(App);
