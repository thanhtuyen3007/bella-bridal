import React from 'react';
import Header from '~/componentes/Layouts/Header/Header';
import Footer from '~/componentes/Layouts/Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <main>
                <div>{children}</div>
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
