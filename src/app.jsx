// react
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// offline-plugin
import '@lib/offline-plugin';

// app component
import Main from '@components/Main/Main';

import primaryTheme from './theme/primary';

// react app
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <ThemeProvider theme={primaryTheme}>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Main);

if (module.hot) {
  module.hot.accept('@components/Main/Main.jsx', () => {
    render(Main);
  });
}
