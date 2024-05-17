const dataNews = [
    {
        title: 'Top 5 Miss World Viet Nam Thoa Thương hoá nàng dâu lộng lẫy trong show diễn La Vie Est Belle',
        desc: 'Top 5 Miss World Viet Nam - Thoa Thương hoá nàng dâu lộng lẫy trong show diễn “La Vie Est Belle” trong show diễn “La Vie Est Belle”',
        img: 'https://bellabridal.vn/public/upload/files/z4748857468047_0f6baee5ade72c49e082cd3ac9384570(1).jpg',
    },
    {
        title: 'Vedette Á Hậu Miss Grand Viet Nam Bùi Khánh Linh toả sáng với đôi cánh thiên thần trong BST La Vie Est Belle',
        desc: 'Tại chương trình Autumn Wedding Fashion Show diễn ra tối 30/9, Á hậu 1 Miss Grand Việt Nam - Bùi Khánh Linh đảm nhiệm vai trò vedette toả sáng rực rỡ trong thiết kế độc bản của Bella trong BST "La Vie Est Belle"',
        img: 'https://bellabridal.vn/public/upload/files/384531153_629164552753502_8371566639704604650_n(2).jpg',
    },
    {
        title: 'Muốn thuê váy cưới đẹp, soiree cưới đẹp Nha Trang nàng dâu nên làm thế nào?',
        desc: 'Thuê váy cưới đẹp, soiree cưới đẹp Nha Trang - Hiện nay có quá nhiều cửa hàng cho thuê áo cưới nên các nàng thường hay bị hoang mang với hàng ngàn câu hỏi “Thuê váy cưới ở đâu đẹp?”, “Làm thế nào thuê áo cưới đẹp ưng ý?”,… Để thuê một chiếc soiree cưới đẹp tôn dáng với chi phí phù hợp không khó, chỉ cần lưu ý một vài điểm mà Bella Bridal gợi ý dưới đây, nàng sẽ toả sáng lộng lẫy trong ngày vui mình.',
        img: 'https://bellabridal.vn/public/upload/files/l.jpg',
    },
    {
        title: 'Tinh hoa hội tụ trong show diễn váy cưới Le Jardin tại Rustic Studio Hồ Chí Minh',
        desc: 'Sau 365 ngày thai nghén, kỳ công chuẩn bị từng chút từng chút thì show diễn váy cưới đặc biệt nhất ngành cưới năm nay “ Le Jardin ” đã chính thức trở thành hiện thực và có một kết quả thật mãn nhãn.',
        img: 'https://bellabridal.vn/public/upload/files/z4956242741700_631cc0aed2a839be66ad615adf921da8.jpg',
    },
    {
        title: 'Show diễn Le Jardin đánh dấu cột mốc 11 năm ấn tượng, thăng hoa của TuArt',
        desc: 'Đánh dấu cột mốc đặc biệt 11 năm hoạt động trong lĩnh vực cưới hỏi TuArt đã tổ chức và thực hiện sự kiện “Le Jardin” nhân dịp khai trương phim trường Rustic lớn nhất thuộc hệ sinh thái của TuArt Group, ra mắt dòng váy cao cấp Bella Haute Couture kết hợp đại tiệc âm nhạc với quy mô private cùng 300 khách mời VIP và nhiều nghệ sĩ tham dự: Siêu mẫu Minh Tú, Á Hậu/ Mentor Mai Ngô, Á Hậu Chế Nguyễn Quỳnh Châu, Hoa Hậu Trần Thị Thu Uyên, Ca sĩ Vũ Duy Khánh, Ca sĩ Hoàng Yến Chibi, Diễn viên/Người mẫu Lâm Bảo Châu, Fashionista Thuận Nguyễn,.…',
        img: 'https://bellabridal.vn/public/upload/files/z4956360349796_bba3199b8f412fbb36ddfd8cd58f0867.jpg',
    },
    {
        title: 'Tất tần tật những mẫu váy cưới đẹp, áo cưới đẹp sang trọng xu hướng năm 2024 -2025',
        desc: 'Váy cưới đẹp, áo cưới đẹp sang trọng - Lễ cưới là ngày trọng đại của đời người, do đó các cô dâu đều rất quan tâm đến chất lượng của váy áo. Chiếc áo cưới đẹp, váy cưới đẹp sang trọng làm cho cô dâu xinh đẹp và là tâm điểm trong lễ cưới. Vậy làm sao mình có thể chọn được một chiếc váy cưới thiết kế đẹp nhất". Hãy cùng Bella Bridal điểm mặt những mẫu váy cưới đẹp, áo cưới đẹp sang trọng xu hướng năm 2024 -2025 nhé',
        img: 'https://bellabridal.vn/public/upload/files/104821588_1106678943047919_7445937971267726197_o.jpg',
    },
    {
        title: 'Đương Kim Hoa Hậu Du Lịch Việt Nam Lương Kỳ Duyên lộng lẫy với mẫu váy Twinkle Star trong show diễn La Vie Est Belle',
        desc: 'Tại chương trình Autumn Wedding Fashion Show diễn ra tối 30/9, Đương kim Miss Tourism Viet Nam – Lương Kỳ Duyên đảm nhiệm vai trò Firstface toả sáng lộng lẫy trong thiết kế Twinkle Star của Bella trong BST "La Vie Est Belle"',
        img: 'https://bellabridal.vn/public/upload/files/z4748858756339_502e89ffa0c3b0d90707e1b6fe5e27e1%20(1).jpg',
    },
    {
        title: 'Dàn sao quy tụ trong show diễn của TuArt tại phố đi bộ Hoàn Kiếm',
        desc: 'Tại chương trình Autumn Wedding Fashion Show diễn ra tối 30/9, tại sân khấu Đền Bà Kiệu, phố đi bộ Hoàn Kiếm, Hà Nội, Đương kim Miss Tourism Viet Nam - Lương Kỳ Duyên, Á Hậu 1 Miss Grand Việt Nam - Bùi Khánh Linh cùng dàn sao đã thu hút hơn 11.000 khán giả dõi theo khi trình diễn hơn 20 mẫu váy cưới đẹp nhất cho mùa cưới 2023 trong bộ sưu tập “La Vie Est Belle" Bella By TuArt Wedding.',
        img: 'https://bellabridal.vn/public/upload/files/384531152_891097655772584_2533443069695201470_n.jpg',
    },
    {
        title: 'Hoa Hậu Huỳnh Nguyễn Mai Phương Hóa nàng dâu yêu kiều trong BST của Bella Bridal',
        desc: 'Bella Bridal lại một lần nữa có được niềm vinh hạnh đón tiếp Hoa Hậu Huỳnh Nguyễn  Mai Phương - Miss World Vietnam  2022 trong BST Shining Sparkle của Bella Bridal',
        img: 'https://bellabridal.vn/public/upload/files/306849134_1667701316945676_8745221727083082539_n(1).jpg',
    },
    {
        title: 'Váy cưới thiết kế - Thiết kế & May váy áo cưới đẹp tại Bella Bridal',
        desc: 'Váy cưới thiết kế  -  Một chiếc váy cưới đẹp phải “thỏa mãn” đủ tiêu chuẩn về đường may, phom dáng, sự kết hợp giữa các chi tiết đính kết để giúp cô dâu thật nổi bật và tỏa sáng trong ngày trọng đại của cuộc đời!',
        img: 'https://bellabridal.vn/public/upload/files/274220375_1522900174759125_7328554201742947975_n.jpg',
    },
];
export default dataNews;
