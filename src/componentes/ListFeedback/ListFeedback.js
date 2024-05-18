import React from 'react';
import FeedbackItem from './FeedbackItem';
import { dataFeedback } from '~/dataFeedback';
import { properties } from '~/componentes/CustomSlide/CustomSlide';

import { Container } from 'react-bootstrap';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import classNames from 'classnames/bind';
import styles from './ListFeedback.module.scss';

const cx = classNames.bind(styles);

function ListFeedback() {
    return (
        <section className={cx('wrapper')}>
            <Container className="py-5">
                <h1 className={cx('title')}>
                    người nổi tiếng chọn bella bridal
                </h1>
                <Slide
                    defaultIndex={1}
                    infinite={false}
                    duration={3000}
                    transitionDuration={800}
                    {...properties}
                    // responsive={responsiveSettings}
                >
                    {dataFeedback.map((data, index) => (
                        <FeedbackItem data={data} key={index} />
                    ))}
                </Slide>
            </Container>
        </section>
    );
}

export default ListFeedback;
