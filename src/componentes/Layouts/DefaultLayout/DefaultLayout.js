import React from 'react';
import Header from '~/componentes/Layouts/Header/Header';
import Footer from '~/componentes/Layouts/Footer/Footer';
import Criteria from '~/componentes/Layouts/Criteria/Criteria';

import './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className="default-wrapper">
            <Header />
            <main>
                <div>{children}</div>
                <Criteria />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
