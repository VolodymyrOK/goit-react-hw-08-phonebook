import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { Theme } from 'styles/Theme';
import { persistor, store } from 'redux/store';
import { GlobalStyle } from 'styles/GlobalStyles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={Theme}>
            <BrowserRouter basename="/goit-react-hw-08-phonebook">
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
      <Toaster />
      <GlobalStyle />
    </HelmetProvider>
  </React.StrictMode>
);
