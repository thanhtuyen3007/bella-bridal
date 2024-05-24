import React from 'react';
import { Container } from 'react-bootstrap';
import {
    properties,
    responsiveSettings,
} from '~/componentes/CustomSlide/CustomSlide';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './ListNews.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';
import dataNews from '~/dataNews';
import NewItem from './NewItemHome';

const cx = classNames.bind(styles);

function ListNews() {
    return (
        <section className={cx('wrapper')}>
            <Container>
                <div className={cx('icon-line')}>
                    <img src={images.iconLine} alt='iconLine' />
                </div>
                <div className={cx('title-block')}>
                    <h1 className={cx('title-text')}>tin tức</h1>
                    <p className={cx('title-desc')}>
                        Tin tức về xu hướng váy cưới mới nhất từ trong đến ngoài
                        nước.Các sự kiện đặc biệt đang diễn ra tại Bella Bridal.
                    </p>
                </div>

                <div className="overflow-hidden py-5">
                    <Slide
                        duration={3000}
                        transitionDuration={600}
                        {...properties}
                        responsive={responsiveSettings}
                    >
                        {dataNews.map((dataNews, index) => (
                            <NewItem key={index} data={dataNews} />
                        ))}
                    </Slide>
                </div>

                <div className={cx('icon-line')}>
                    <img src={images.iconLine} alt='iconLine' />
                </div>
            </Container>
        </section>
    );
}

export default ListNews;
