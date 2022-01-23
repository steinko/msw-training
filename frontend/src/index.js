import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

if (process.env.REACT_APP_USE_MSW_MOCK_API === 'yes') { // eslint-disable-line
  const { mswWorker } = require('./api-mocks/msw-worker'); // eslint-disable-line
  mswWorker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
