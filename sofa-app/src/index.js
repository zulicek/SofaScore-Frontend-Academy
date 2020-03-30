import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.scss';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App perPage={10}/>
  </React.StrictMode>,
  document.getElementById('root')
);
