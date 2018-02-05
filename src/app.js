import React from 'react';
import ReactDOM from 'react-dom';

// import 'normalize.css/normalize.css';
import 'semantic-ui-css/semantic.min.css';
// import './styles/styles.scss';

import App from './components/App';


// Exposes the React library globally in the browser, 
// which ensures all calls to React.createElement are assured to work.
window.React = React;

ReactDOM.render(<App />, document.getElementById("app"));
