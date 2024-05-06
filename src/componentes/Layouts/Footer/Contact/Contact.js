import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarth,
    faEnvelope,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';

import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <Row className={cx('footer-contact')}>
            <Col md={4}>
                <div className={cx('contact')}>
                    <div className={cx('branch-item')}>
                        <h3 className={cx('contact-title')}>liên hệ</h3>
                        <div className={cx('contact-info')}>
                            <FontAwesomeIcon
                                className={cx('contact-icon')}
                                icon={faLocationDot}
                            />
                            <span>
                                Trụ sở: Bella Limited - 160 Phố Huế, Hai Bà
                                Trưng, Hà Nội.
                            </span>
                        </div>
                        <div className={cx('contact-info')}>
                            <FontAwesomeIcon
                                className={cx('contact-icon')}
                                icon={faPhone}
                            />
                            <span>0965 863 368</span>
                        </div>
                        <div className={cx('contact-info')}>
                            <FontAwesomeIcon
                                className={cx('contact-icon')}
                                icon={faEnvelope}
                            />
                            <span>bellabridal.vn@gmail.com</span>
                        </div>
                        <div className={cx('contact-info')}>
                            <FontAwesomeIcon
                                className={cx('contact-icon')}
                                icon={faEarth}
                            />
                            <span>http://bellabridal.vn</span>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4}></Col>
        </Row>
    );
}

export default Contact;
