import React from 'react';
import './AboutUs.module.scss';
import PostBlog from '~/componentes/PostBlog/PostBlog';
import AboutPost from './AboutPost';

function AboutUs() {
    const data = {
        title: 'giới thiệu',
        img: 'https://bellabridal.vn/public/upload/files/333060788_727119808990117_6601419537443843116_n%20(1)(1).jpg',
        desc: 'Bella Bridal ra mắt BST đầu tiên “La Belle” nhanh chóng dành được rất nhiều sự quan tâm của các cô dâu chú rể. Đến nay, Bella Bridal tự hào được công nhận là một trong những thương hiệu váy cưới lớn nhất miền Bắc với phong cách thiết kế mới lạ, đa dạng và được cập nhật liên tục với những xu hướng hàng đầu trên thế giới.Các mẫu váy cưới của Bella đều sử dụng những chất liệu vải ren cao cấp được nhập khẩu với phom dáng váy đa dạng, tôn lên những đường cong quyến rũ của các nàng dâu.',
    };
    return <PostBlog data={data} children={<AboutPost/>}/>;
}

export default AboutUs;
