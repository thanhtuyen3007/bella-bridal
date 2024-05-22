import React from 'react';
import { Col } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './AboutUs.module.scss';

const cx = classNames.bind(styles);

function AboutPost() {
    const urlImgs = [
        'https://bellabridal.vn/public/upload/files/333060788_727119808990117_6601419537443843116_n%20(1)(1).jpg',
        'https://bellabridal.vn/public/upload/files/123139353_1207124216336724_8941657484025910089_o(1).jpg',
        'https://bellabridal.vn/public/upload/files/338194579_1418758545623743_6361513129550819345_n%20(1)(2).jpg',
        'https://bellabridal.vn/public/upload/files/332214096_770967081110310_4925785504140250098_n%20(1)(1).jpg',
        'https://bellabridal.vn/public/upload/files/337226714_1351966512309031_6031598648579807509_n(3).jpg',
        'https://bellabridal.vn/public/upload/files/322479087_1393700978115329_7633767606017962854_n.jpg',
    ];
    return (
        <Col className={cx('content')} md={8}>
            <p>
                Bella Bridal ra mắt BST đầu tiên “La Belle” nhanh chóng dành
                được rất nhiều sự quan tâm của các cô dâu chú rể. Đến nay, Bella
                Bridal tự hào được công nhận là một trong những thương hiệu váy
                cưới lớn nhất miền Bắc với phong cách thiết kế mới lạ, đa dạng
                và được cập nhật liên tục với những xu hướng hàng đầu trên thế
                giới.
            </p>
            <p>
                Các mẫu váy cưới của Bella đều sử dụng những chất liệu vải ren
                cao cấp được nhập khẩu với phom dáng váy đa dạng, tôn lên những
                đường cong quyến rũ của các nàng dâu.
            </p>
            {urlImgs.map((urlImg, index) => (
                <img
                    key={index}
                    src={urlImg}
                    style={{ width: '100%' }}
                    className="mb-5"
                    alt="bella"
                />
            ))}
            <p>
                Ngoài đội ngũ các NTK trẻ đầy nhiệt huyết, Bella Bridal liên tục
                hợp tác với các NTK váy cưới hàng đầu: NTK Anh Thư, NTK Nguyễn
                Minh Công,.. để ra mắt những mẫu váy cưới theo các xu hướng mới
                nhất trên thế giới. Bella Bridal đã phục vụ hơn 30000 cô dâu chỉ
                trong 5 năm hoạt động, trong đó có nhiều người nổi tiếng như:
                Hoa hậu H’Hen Niê, Á hậu Huyền My, Hoa hậu Tường Linh, Á Hậu
                Tường San, Hoa hậu Lương Thùy Linh, diễn viên Minh Khuê,…
            </p>
            <p>
                <strong className="my-5">Bella Bridal Viet Nam</strong>
            </p>
            <span>
                <strong>● Hotline:</strong> 0965 863 368 (Ms Ngân)
            </span>
            <p className='py-3'>
                <span>
                    Website:&nbsp;
                    <a className='text-primary' href="http://bellabridal.vn/vi/">bellabridal.vn</a>
                </span>
            </p>
            <p>
                <span>
                    Fanpage:&nbsp;
                    <a className='text-primary' href="https://www.facebook.com/bellabridalvietnam/">
                        https://www.facebook.com/bellabridalvietnam/
                    </a>
                </span>
            </p>
        </Col>
    );
}

export default AboutPost;
