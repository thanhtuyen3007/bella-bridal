import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from '~/componentes/Slider/Slider';
import ProductHome from '~/componentes/ProductHome/ProductHome';
const cx = classNames.bind(styles);
function Home() {
    const listSlider = [
        'https://bellabridal.vn/public/upload/files/z5416962013185_6b1af4b88cc9d8309c57e68b09228dfa%20(1)(1).jpg',
        'https://bellabridal.vn/public/upload/files/cover%20Bella%20(1)(1)(1).jpg',
    ];
    return (
        <div className={cx('wrapper')}>
            <Slider listSlider={listSlider} />
            <ProductHome/>
        </div>
    );
}

export default Home;
