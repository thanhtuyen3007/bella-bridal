import React from 'react';
import Header from '~/componentes/Layouts/Header/Header';
import Footer from '~/componentes/Layouts/Footer/Footer';
import Criteria from '~/componentes/Layouts/Criteria/Criteria';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main>
                <div className={cx('content')}>{children}</div>
                <Criteria />
                <div className={cx('booking')}>
                    <Link to={'/booking-now'} className={cx('btn-booking')}>
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="me-2"
                        />
                        đặt lịch hẹn
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
