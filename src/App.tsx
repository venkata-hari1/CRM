import React, { Suspense, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { useLocation, useNavigate, BrowserRouter as Router } from 'react-router-dom';
import { navigation } from './Utils/navigation';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/store/Store';
const AppRoute = React.lazy(
  () => import("./Components/Routes/Routes")
);

const App = () => {
  const theme = createTheme({});
  const navigate = useNavigate();
  const location = useLocation();
  navigation.navigate = navigate;
  navigation.location = location as any;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
        <AppRoute />
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
