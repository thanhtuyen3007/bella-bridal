import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './News.module.scss';
import Slider from '~/componentes/Slider/Slider';
import dataNews from '~/dataNews';
import TitleSectiton from '~/componentes/TitleSectiton/TitleSectiton';
import NewItem from '~/componentes/NewItem/NewItem';

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
                <TitleSectiton
                    title={'tin tức'}
                    desc={
                        'Tin tức về xu hướng váy cưới mới nhất từ trong đến ngoài nước. Các sự kiện đặc biệt đang diễn ra tại Bella Bridal.'
                    }
                />
                <Row>
                    {dataNews.map((newItem, index) => (
                        <Col key={index} md={4} className="gx-5 my-4">
                            <NewItem title={newItem.title} img={newItem.img} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default News;
