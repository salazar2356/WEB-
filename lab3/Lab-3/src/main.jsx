import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import AppRouter from './Approuter.jsx';


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
<BrowserRouter>
    <AppRouter/>
</BrowserRouter>
    )