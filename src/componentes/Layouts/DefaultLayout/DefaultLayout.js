import React from 'react';
import Header from '~/componentes/Layouts/Header/Header';
import Footer from '~/componentes/Layouts/Footer/Footer';
import Criteria from '~/componentes/Layouts/Criteria/Criteria';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main>
                <div className={cx('content')}>{children}</div>
                <Criteria />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
