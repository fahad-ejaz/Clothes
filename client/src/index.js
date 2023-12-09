import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ParallaxProvider>
<HashRouter>
    <App />
    </HashRouter>
</ParallaxProvider>
);