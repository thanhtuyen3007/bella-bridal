import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductHome.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import listProduct from './listProduct';

const cx = classNames.bind(styles);

function ProductHome() {
    const imgRef = useRef(null);
    const listImgRef = useRef();
    const timerRef = useRef(null);
    const lengthListProduct = listProduct.length - 2;
    const [widthImg, setWidthImg] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        clearTimeout(timerRef.current);
        if (currentIndex === 0) {
            setCurrentIndex(0);
            let newWidth = 0;
            setWidthImg(newWidth);
        } else {
            setCurrentIndex(currentIndex - 1);
            let newWidth = imgRef.current
                ? imgRef.current.offsetWidth * currentIndex * -1
                : 0;
            setWidthImg(newWidth);
        }
    };
    const goToNext = () => {
        clearTimeout(timerRef.current);
        if (currentIndex === lengthListProduct) {
            setCurrentIndex(0);
            setWidthImg(0);
        } else {
            setCurrentIndex(currentIndex + 1);
            let newWidth = imgRef.current
                ? imgRef.current.offsetWidth * currentIndex * -1
                : 0;
            setWidthImg(newWidth);
        }
    };

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            if (currentIndex === lengthListProduct) {
                setCurrentIndex(0);
                setWidthImg(0);
            } else {
                setCurrentIndex(currentIndex + 1);
                let newWidth = imgRef.current.offsetWidth * currentIndex * -1;
                setWidthImg(newWidth);
            }
        }, 2500);
        return () => {
            clearTimeout(timerRef.current);
        };
    }, [currentIndex]);
    return (
        <section className={cx('wrapper')}>
            <Container className="p-4 d-none d-md-block position-relative">
                <span className={cx('pro-title')}>váy cưới nổi bật</span>
                <div className={cx('pro-list')}>
                    <Container className="overflow-hidden">
                        <Row
                            style={{
                                transform: `translateX(${widthImg}px)`,
                                transition: '0.5s',
                            }}
                            ref={listImgRef}
                            className="flex-nowrap"
                        >
                            {listProduct.map((proItem, index) => (
                                <Col key={index} md={6} lg={4}>
                                    <div className="pe-5" ref={imgRef}>
                                        <img
                                            className={cx('pro-img')}
                                            src={proItem.url}
                                            alt={proItem.title}
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
                <div className={cx('pro-control')}>
                    <FontAwesomeIcon
                        className={cx('pro-btn__left')}
                        icon={faAngleLeft}
                        onClick={goToPrev}
                    />
                    <FontAwesomeIcon
                        className={cx('pro-btn__right')}
                        icon={faAngleRight}
                        onClick={goToNext}
                    />
                </div>
            </Container>
        </section>
    );
}

export default ProductHome;
