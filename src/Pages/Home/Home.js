import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Slider from '~/componentes/Slider/Slider';
import ProductHome from '~/componentes/ProductHome/ProductHome';
import Collections from '~/componentes/Collections/Collections';
import dataCollections from '~/dataCollections';
const cx = classNames.bind(styles);
function Home() {
    let reverse = useRef(false);

    const listSlider = [
        'https://bellabridal.vn/public/upload/files/z5416962013185_6b1af4b88cc9d8309c57e68b09228dfa%20(1)(1).jpg',
        'https://bellabridal.vn/public/upload/files/cover%20Bella%20(1)(1)(1).jpg',
    ];
    return (
        <div className={cx('wrapper')}>
            <Slider listSlider={listSlider} />
            <ProductHome />
            <section className={cx('collection-wrapper')}>
                <Container>
                    <h1 className={cx('collection-title')}>bộ sưu tập</h1>
                    {dataCollections.map((dataCollection, index) => (
                        <div key={index}>
                            {
                                (reverse.current =
                                    index % 2 === 0 ? (
                                        <Collections data={dataCollection} />
                                    ) : (
                                        <Collections
                                            data={dataCollection}
                                            reverse
                                        />
                                    ))
                            }
                        </div>
                    ))}
                </Container>
            </section>
        </div>
    );
}

export default Home;
