import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './PostBlog.module.scss';
import dataNews from '~/dataNews';

const cx = classNames.bind(styles);

function RecommendPost() {
    return (
        <Col md={4} className="d-none d-md-block">
            <ListGroup>
            <h3 className={cx('title-rec')}>bài viết xem nhiều</h3>
                {dataNews.slice(2, 8).map((dataNew, index) => (
                    <ListGroup.Item
                        className="border-0 border-bottom"
                        key={index}
                    >
                        <Row>
                            <Col md={4} className="px-0">
                                <Link to={`/${dataNew.title}`}>
                                    <img
                                        style={{
                                            width: '100%',
                                            maxHeight: '70px',
                                            objectFit: 'cover',
                                            objectPosition: '50% 0',
                                        }}
                                        src={dataNew.img}
                                        alt={dataNew.title}
                                    />
                                </Link>
                            </Col>
                            <Col>
                                <Link
                                    to={`/${dataNew.title}`}
                                    className={cx('title-item')}
                                >
                                    {dataNew.title}
                                </Link>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Col>
    );
}

export default RecommendPost;
