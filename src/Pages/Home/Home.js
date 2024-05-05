import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    return (
        <section className={cx('content')}>
            <h1>home</h1>
        </section>
    );
}

export default Home;
