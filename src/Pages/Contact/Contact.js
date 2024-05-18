import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FormContact from './FormContact';
import Slider from '~/componentes/Slider/Slider';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <section className={cx('wrapper')}>
            <Slider
                src={
                    'https://bellabridal.vn/public/upload/images/slides/2345235.jpg'
                }
            />
            <Container className="py-5">
                <Row>
                    <Col md={7}>
                        <div className={cx('contact-title')}>
                            <h2>VÁY CƯỚI BELLA BRIDAL</h2>
                        </div>
                        <div className={cx('contact-info')}>
                            <p>
                                <strong>Địa chỉ:</strong>Trụ sở: Bella Limited -
                                160 Phố Huế, Hai Bà Trưng, Hà Nội.
                            </p>
                            <p>
                                <strong>Điện thoại:</strong>0965 863 368 -
                            </p>
                            <p>
                                <strong>Email:</strong>bellabridal.vn@gmail.com
                            </p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={cx('contact-title')}>
                            <h2>LIÊN HỆ</h2>
                        </div>
                        <FormContact />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
