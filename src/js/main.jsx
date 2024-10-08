import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/js/all.js';
import { AppContext } from './store/ContentContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppContext>
        <App />
    </AppContext>
);
