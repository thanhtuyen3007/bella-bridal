import React from 'react';
import { Form, Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function FormContact() {
    return (
        <Form className="my-5">
            <Form.Control
                className="mb-4 rounded-0 "
                size="lg"
                type="text"
                placeholder="Họ tên"
            />
            <Form.Control
                className="mb-4 rounded-0 "
                size="lg"
                type="phone"
                placeholder="Số điện thoại"
            />
            <Form.Control
                className="mb-4 rounded-0 "
                size="lg"
                type="email"
                placeholder="Địa chỉ email"
            />
            <Form.Control
                className="mb-4 rounded-0 "
                size="lg"
                type="text"
                placeholder="Mã bảo mật"
            />
            <Form.Control
                className="mb-4 rounded-0 "
                size="lg"
                as="textarea"
                rows={5}
                placeholder="Nội dung"
            />

            <Button className={cx('btn-form')} type="submit" size="lg">
                Gửi liên hệ
            </Button>
        </Form>
    );
}

export default FormContact;
