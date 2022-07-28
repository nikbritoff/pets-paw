import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import './i18n';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
