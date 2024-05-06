import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Row, Col } from 'react-bootstrap';
import { faScissors, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets';

function Criteria() {
    return (
        <section className="criteria py-4">
            <Container>
                <Row className="">
                    <Col className="text-center py-4" md={6}>
                        <img
                            className="d-block mx-auto mb-5 "
                            src={images.cut}
                            alt="icon_1"
                        />
                        <span className="fs-2 fw-semibold">
                            Váy cưới thiết kế cao cấp tiêu chuẩn Châu Âu
                        </span>
                    </Col>
                    <Col className="text-center py-4" md={6}>
                        <img
                            className="d-block mx-auto mb-5 "
                            src={images.earth}
                            alt="icon_1"
                        />
                        <span className="fs-2 fw-semibold">
                            Đồng hành cùng các cô dâu trên toàn thế giới
                        </span>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Criteria;
