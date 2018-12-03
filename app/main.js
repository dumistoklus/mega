import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from "./ReactApp.tsx";

ReactDOM.render(
    React.createElement(ReactApp, {}, null),
    document.getElementById('root'),
);
