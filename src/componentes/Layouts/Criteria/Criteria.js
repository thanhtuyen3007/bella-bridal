import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import images from '~/assets';

function Criteria() {
    return (
        <section className="criteria py-5">
            <Container fluid className="py-5">
                <Row>
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
