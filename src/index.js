// load Constants
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';// Part of Redux

// import others
import './index.css';
import './assets/SASS/mini-dark.scss';

//Loading the App in DOM
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();// Part of Redux
