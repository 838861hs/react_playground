import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Header from './Header.jsx';
import './scss/main.scss'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)
