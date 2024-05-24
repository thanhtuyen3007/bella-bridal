import React from 'react';
import classNames from 'classnames/bind';

import styles from './WeddingPhoto.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from '~/componentes/Slider/Slider';
import TitleSectiton from '~/componentes/TitleSectiton/TitleSectiton';
import NewItem from '~/componentes/NewItem/NewItem';
import dataWeddingPhoto from '~/dataWeddingPhoto';

const cx = classNames.bind(styles);

function WeddingPhoto() {
    return (
        <section className={cx('wrapper')}>
            <Slider
                src={
                    'https://bellabridal.vn/public/upload/files/z4274128720218_1a6cc312a62a55c5798c8b1aa02ccbe9%20(1).jpg'
                }
            />
            <Container>
                <TitleSectiton
                    title={'chụp ảnh cưới'}
                    desc={
                        'Bạn đang tìm kiếm dịch vụ chụp ảnh cưới đẹp uy tín, chuyên nghiệp ? Hãy đến với TuArt Wedding để được trải nghiệm dịch vụ chụp ảnh cưới đẹp và đẳng cấp của chúng tôi!'
                    }
                />
                <Row>
                    {dataWeddingPhoto.map((newItem, index) => (
                        <Col key={index} md={4} className="gx-5 my-4">
                            <NewItem title={newItem.title} img={newItem.img} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default WeddingPhoto;
