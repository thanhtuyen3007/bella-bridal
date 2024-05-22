import React from 'react';
import { Container } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './BookingNow.module.scss';
import FormBooking from './FormBooking';

const cx = classNames.bind(styles);

function BookingNow() {
    return (
        <section className={cx('booking-section')}>
            <Container className="py-5">
                <div className={cx('form-title__wrap')}>
                    <h1 className={cx('form-title')}>đặt lịch</h1>
                    <span className={cx('form-title__text')}>
                        Vui lòng đặt hẹn trước để chúng tôi có thể hỗ trợ bạn
                        tốt nhất.
                    </span>
                </div>
                <FormBooking />
            </Container>
        </section>
    );
}

export default BookingNow;
