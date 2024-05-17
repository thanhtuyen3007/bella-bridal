import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './ListNews.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets';
import dataNews from '~/dataNews';
import NewItem from './NewItem';

const cx = classNames.bind(styles);

function ListNews() {
    const buttonStyle = {
        color: 'var(--hover-bg-color)',
        background: 'none',
        border: 'none',
        fontSize: '3.5rem',
        zIndex: '1',
    };
    const properties = {
        prevArrow: (
            <button style={{ ...buttonStyle }}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        ),
        nextArrow: (
            <button style={{ ...buttonStyle }}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        ),
    };
    const responsiveSettings = [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];
    return (
        <section className={cx('wrapper')}>
            <Container>
                <div className={cx('icon-line')}>
                    <img src={images.iconLine} />
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
                        transitionDuration={400}
                        {...properties}
                        responsive={responsiveSettings}
                        indicators={true}
                    >
                        {dataNews.map((dataNews, index) => (
                            <NewItem key={index} data={dataNews} />
                        ))}
                    </Slide>
                </div>

                <div className={cx('icon-line')}>
                    <img src={images.iconLine} />
                </div>
            </Container>
        </section>
    );
}

export default ListNews;
