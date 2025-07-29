import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// root 요소 가져오기
const container = document.getElementById('root')!;
const root = createRoot(container);

// StrictMode로 감싸서 렌더링
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);