import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../shared/App';


window.addEventListener('load', () => {
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
})
