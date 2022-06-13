import { ErrorBoundary, PageLoading } from 'components';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components/macro';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_SERVER_URL;

const SignUp = lazy(() => import('./components/SignUp'));
const SignIn = lazy(() => import('./components/SignIn'));

export const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ErrorBoundary>
          <Suspense fallback={<PageLoading />}>
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  );
}

export default App;
