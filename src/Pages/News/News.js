import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './News.module.scss';
import Slider from '~/componentes/Slider/Slider';
import dataNews from '~/dataNews';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function News() {
    return (
        <section className={cx('wrapper')}>
            <Slider
                src={
                    'https://bellabridal.vn/public/upload/images/slides/Untitled-1.jpg'
                }
            ></Slider>
            <Container>
                <div className={cx('wrapper-title')}>
                    <h1 className={cx('title')}>tin tức</h1>
                    <p className={cx('title-decs')}>
                        Tin tức về xu hướng váy cưới mới nhất từ trong đến ngoài
                        nước. Các sự kiện đặc biệt đang diễn ra tại Bella
                        Bridal.
                    </p>
                </div>
                <Row>
                    {dataNews.map((newItem, index) => (
                        <Col key={index} md={4} className="gx-5 my-4">
                            <Link to={`/${newItem.title}`}>
                                <img
                                    className={cx('newItem-img')}
                                    src={newItem.img}
                                    alt={newItem.title}
                                />
                            </Link>
                            <div className={cx('newItem-content')}>
                                <Link
                                    className={cx('newItem-title')}
                                    to={`/${newItem.title}`}
                                >
                                    {newItem.title}
                                </Link>
                                <p className={cx('newItem-day')}>11-12-2023</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default News;
