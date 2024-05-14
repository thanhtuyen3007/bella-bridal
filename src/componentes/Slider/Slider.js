import React, { useRef, useEffect, useState } from 'react';


import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider({ src, listSlider }) {
    const imgRef = useRef();
    const [curentIndex, setIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            goToNext();
        }, 4000);
    }, [curentIndex]);

    const goToPrev = () => {
        const isFirstSlide = curentIndex === 0;
        const newIndex = isFirstSlide ? listSlider.length - 1 : curentIndex - 1;
        setIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = curentIndex === listSlider.length - 1;
        const newIndex = isLastSlide ? 0 : curentIndex + 1;
        setIndex(newIndex);
    };

    return (
        <section className={cx('wrapper')}>
            {listSlider ? (
                <div className={cx('slider-list__img')}>
                  

                    <div className={cx('slider-item__img')}>
                        <img
                            ref={imgRef}
                            className={cx('slider-img')}
                            src={listSlider[curentIndex]}
                            alt="bella"
                        />
                    </div>
                </div>
            ) : (
                <img className={cx('slider-img')} src={src} alt="bella" />
            )}
        </section>
    );
}

export default Slider;
