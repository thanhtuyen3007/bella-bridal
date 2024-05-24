import React from 'react';

import styles from './ListNews.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NewItemHome({ data }) {
    return (
        <div className={cx('wrapper-item')} md={4}>
            <div className={cx('images-item__wrapper')}>
                <img
                    className={cx('images-item')}
                    src={data.img}
                    alt="bella-news"
                />
            </div>
            <h3 className={cx('title-item')}>{data.title}</h3>
            <p className={cx('decs-item')}>{data.desc}</p>
        </div>
    );
}

export default NewItemHome;
