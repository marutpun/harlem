import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root') as HTMLDivElement;

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
