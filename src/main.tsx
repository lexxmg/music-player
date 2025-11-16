import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//import App from './App.tsx'
import { MainPage } from './ui/MainPage';
import './App.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App title='заголовок'/> */}
    <MainPage />
  </StrictMode>,
);
