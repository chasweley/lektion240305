//Ordningen på filerna som importeras spelar roll vad gäller det som faktistk visas
//Exvis index.css och App.css via App.jsx, eftersom index.css står sist är det den som "har sista ordet"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
