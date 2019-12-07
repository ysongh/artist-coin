import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './css/adminProfile.css';
import './css/adminSideDrawer.css';
import './css/artistProfile.css';
import './css/artistSideDrawer.css';
import './css/auth.css';
import './css/fanProfile.css';
import './css/fanSideDrawer.css';
import './css/index.css';
import './css/landing.css';
import './css/navbar.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
