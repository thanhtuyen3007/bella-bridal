import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Contact from './Contact/Contact';

const cx = classNames.bind(styles);

function Footer() {
    const dataBranch = [
        {
            name: 'bella bridal đà nẵng',
            address: '99 A, Núi Thành, Hải Châu, Đà Nẵng',
            phone: '0236 261 6666',
        },
        {
            name: 'bella bridal hồ chí minh',
            address: '147 - 149 Hồ Văn Huê, Phú Nhuận, Hồ Chí Minh',
            phone: '0283 913 8888',
        },
        {
            name: 'bella bridal nha trang',
            address: '70 Thích Quảng Đức, Phước Hải, Nha Trang',
            phone: '0258 222 8555',
        },
        {
            name: 'bella bridal đà lạt',
            address: '147 - 149 Hồ Văn Huê, Phú Nhuận, Hồ Chí Minh',
            phone: '0263 6539 999',
        },
    ];
    return (
        <footer className={cx('footer-wrapper')}>
            <Container className="py-5">
                <Contact />
                <Row className="mt-4">
                    {dataBranch.map((branch, index) => (
                        <Col lg={4} md={6} key={index} className="my-4">
                            <div className={cx('branch-item')}>
                                <h3 className={cx('branch-item-name')}>
                                    {branch.name}
                                </h3>
                                <div className={cx('branch-item-info')}>
                                    <FontAwesomeIcon
                                        className={cx('branch-item-icon')}
                                        icon={faLocationDot}
                                    />
                                    <span>{branch.address}</span>
                                </div>
                                <div className={cx('branch-item-info')}>
                                    <FontAwesomeIcon
                                        className={cx('branch-item-icon')}
                                        icon={faPhone}
                                    />
                                    <span>{branch.phone}</span>
                                </div>
                                <div className={cx('branch-item-mail')}>
                                    <FontAwesomeIcon
                                        className={cx('branch-item-icon')}
                                        icon={faEnvelope}
                                    />
                                    <span>bellabridal.vn@gmail.com</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
