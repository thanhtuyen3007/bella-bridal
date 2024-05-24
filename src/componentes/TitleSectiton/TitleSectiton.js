import React from 'react';
import classNames from 'classnames/bind';

import styles from './TitleSectiton.module.scss';

const cx = classNames.bind(styles);

function TitleSectiton({ title, desc }) {
    return (
        <div className={cx('wrapper-title')}>
            <h1 className={cx('title')}>{title}</h1>
            <p className={cx('title-decs')}>{desc}</p>
        </div>
    );
}

export default TitleSectiton;
