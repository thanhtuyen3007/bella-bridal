import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/componentes/GlobalStyles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </ThemeProvider>
    </React.StrictMode>,
);
