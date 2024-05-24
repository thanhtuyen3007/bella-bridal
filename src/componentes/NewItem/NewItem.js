import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './NewItem.module.scss';

const cx = classNames.bind(styles);

function NewItem({ title, img }) {
    return (
        <>
            <Link to={`/${title}`}>
                <img className={cx('newItem-img')} src={img} alt={title} />
            </Link>
            <div className={cx('newItem-content')}>
                <Link className={cx('newItem-title')} to={`/${title}`}>
                    {title}
                </Link>
                <p className={cx('newItem-day')}>11-12-2023</p>
            </div>
        </>
    );
}

export default NewItem;
