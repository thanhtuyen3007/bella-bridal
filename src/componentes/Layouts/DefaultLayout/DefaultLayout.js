import React from 'react';
import Header from '~/componentes/Layouts/Header/Header';
import Footer from '~/componentes/Layouts/Footer/Footer';
import Criteria from '~/componentes/Layouts/Criteria/Criteria';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <main>
                {children}
                <Criteria />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
