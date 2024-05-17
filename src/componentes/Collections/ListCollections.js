import React from 'react';
import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import Collections from './Collections';
import dataCollections from '~/dataCollections';
import classNames from 'classnames/bind';
import styles from './Collections.module.scss';
const cx = classNames.bind(styles);

function ListCollections() {
    let reverse = useRef(false);

    return (
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
    );
}

export default ListCollections;
