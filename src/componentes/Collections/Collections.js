import dataCollections from '~/dataCollections';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Collections.module.scss';
import 'react-slideshow-image/dist/styles.css';

const cx = classNames.bind(styles);

const buttonStyle = {
    color: 'var(--hover-bg-color)',
    background: 'none',
    border: 'none',
    fontSize: '3.5rem',
    zIndex: '1',
};
const properties = {
    prevArrow: (
        <button style={{ ...buttonStyle }}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    ),
    nextArrow: (
        <button style={{ ...buttonStyle }}>
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
    ),
};

function Collections({ data, reverse = false }) {
    const classes = cx('collection-row', {
        reverse,
    });
    return (
        <>
            <Row className={classes}>
                <Col md={4}>
                    <Slide {...properties}>
                        {data.dataImg.slice(0, 3).map((dressImg, index) => (
                            <div key={index}>
                                <img
                                    style={{ width: '100%' }}
                                    src={dressImg.src}
                                    alt={dressImg.descImg}
                                />
                            </div>
                        ))}
                    </Slide>
                </Col>
                <Col md={8} className="px-5">
                    <h1 className="py-4">{data.title}</h1>
                    <p className="fw-light lh-lg">{data.decs}</p>
                </Col>
            </Row>
        </>
    );
}

export default Collections;
