import '@hotwired/turbo-rails'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './src/components/App';
import store from './src/components/store/configureStore';
import { fetchGreeting } from './src/components/store/greeting/greetingSlice';

store.dispatch(fetchGreeting())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider >
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);