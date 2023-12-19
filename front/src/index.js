import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkContextProvider } from './context/WorkContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <WorkContextProvider>
    <App />
    </WorkContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
