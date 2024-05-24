import React from 'react';
import { Container, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './PostBlog.module.scss';
import Slider from '~/componentes/Slider/Slider';
import RecommendPost from './RecommendPost';

const cx = classNames.bind(styles);

function PostBlog({ data, children }) {
    console.log(data);
    return (
        <section className={cx('wrapper')}>
            <Slider
                src={
                    'https://bellabridal.vn/public/upload/images/slides/Untitled-1.jpg'
                }
            />
            <Container>
                <h1 className={cx('title')}>{data ? data.title : ''}</h1>
                <Row className="mt-5">
                    {children}
                    <RecommendPost />
                </Row>
            </Container>
        </section>
    );
}

export default PostBlog;
