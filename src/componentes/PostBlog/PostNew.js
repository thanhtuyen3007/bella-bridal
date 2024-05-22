import React from 'react';
import { Col } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './PostBlog.module.scss';

const cx = classNames.bind(styles);

function PostNew({ data }) {
    return (
        <Col md={8}>
            <img
                style={{ width: '100%' }}
                className="mb-5"
                src={data ? data.img : ''}
                alt={data ? data.title : ''}
            />
            <p className={cx('content')}>{data ? data.desc : ''}</p>
        </Col>
    );
}

export default PostNew;
