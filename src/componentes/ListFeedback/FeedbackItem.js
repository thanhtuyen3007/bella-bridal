import React from 'react'

import classNames from 'classnames/bind';
import styles from './ListFeedback.module.scss';

const cx = classNames.bind(styles);

function FeedbackItem({data}) {
  return (
    <article className={cx('item-block')}>
        <img className={cx('item-block__img')} src={data.img} alt={data.name}/>
        <div className={cx('item-block__content')}>
            <strong className={cx('item-block__title')}>{data.name}</strong>
            <span className={cx('item-block__line')}></span>
            <p className={cx('item-block__decs')}>{data.decs}</p>
        </div>
    </article>
  )
}

export default FeedbackItem