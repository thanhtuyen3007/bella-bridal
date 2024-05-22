import React from 'react';
import { Form, Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './BookingNow.module.scss';

const cx = classNames.bind(styles);

function FormBooking() {
    return (
        <Form className={cx('form-booking')}>
            <Form.Group className="mb-5 rounded-0 ">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                    className="mb-5 rounded-0"
                    size="lg"
                    type="text"
                    placeholder="Họ tên"
                />
            </Form.Group>
            <Form.Group className="mb-5 rounded-0 ">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                    className="mb-5 rounded-0"
                    size="lg"
                    type="text"
                    placeholder="Số điện thoại"
                />
            </Form.Group>
            <Form.Group className="mb-5 rounded-0 ">
                <Form.Label>Ngày hẹn dự kiến</Form.Label>
                <Form.Control
                    size="lg"
                    type="date"
                    className="mb-5 rounded-0"
                />
            </Form.Group>
            <Form.Group className="mb-5 rounded-0 ">
                <Form.Label>Ngày cưới dự định</Form.Label>
                <Form.Control
                    size="lg"
                    type="date"
                    className="mb-5 rounded-0"
                />
            </Form.Group>
            <Button className={cx('btn-form')} type="submit" size="lg">
                Gửi liên hệ
            </Button>
        </Form>
    );
}

export default FormBooking;
