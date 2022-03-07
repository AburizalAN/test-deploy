import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/macro';
import theme from './utils/theme';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, storeRedux } from './utils/redux';
import Home from './pages/Homepage';
import Shopping from './pages/shopping';
import Recipe from './pages/recipe';
import PlantBased from './pages/recipe/[catalog]';
import RecipeDetail from './pages/recipe/detail';
import GlobalStyle from './assets/globalStyles';

const themes = createTheme({
  typography: {
    fontFamily: `"Nunito Sans", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const App = () => {
  return (
    <Provider store={storeRedux}>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={themes}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/shopping" component={Shopping} exact />
                <Route path="/recipe" component={Recipe} exact />
                <Route path="/recipe/catalog" component={PlantBased} exact />
                <Route path="/recipe/detail" component={RecipeDetail} exact />
              </Switch>
            </BrowserRouter>
          </PersistGate>
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
