import React from 'react';
import NavItem from './NavItem';
import classNames from 'classnames/bind';
import styles from './NavList.module.scss';
import { Container, Navbar } from 'react-bootstrap';
import images from '~/assets';

const cx = classNames.bind(styles);

function NavList() {
    const navItems = [
        { title: 'trang chủ', to: '/' },
        { title: 'giới thiệu', to: '/gioi-thieu' },
        {
            title: 'váy cưới đẹp',
            dropdown: [
                { key: 'trendy', to: '/trendy' },
                { key: 'elegant', to: '/elegant' },
                { key: 'luxury', to: '/luxury' },
                { key: 'limited', to: '/limited' },
                { key: 'couture', to: '/couture' },
            ],
        },
        {
            title: 'bst váy cưới',
            dropdown: [
                { key: 'dream on me', to: '/dream on me' },
                { key: 'rose dress', to: '/rose dress' },
                { key: 'shining sparkle', to: '/shining sparkle' },
                { key: 'bella haute couture', to: '/bella haute couture' },
                { key: 'the bloom collection', to: '/the bloom collection' },
            ],
        },
        { title: 'chụp ảnh cưới', to: '/chup-anh-cuoi', class: 'spacing' },
        { title: 'tin tức', to: '/tin-tuc' },
        { title: 'showroom', to: '/showroom' },
        { title: 'liên hệ', to: '/lien-he' },
    ];

    return (
        <Container fluid="md" className="position-relative">
            <Navbar expand="lg" className={cx('wrapper-nav')}>
                <Navbar.Brand className={cx('nav-brand')} href="/">
                    <img src={images.logo} alt="vay-cuoi-bella" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {navItems.map((navItem, index) => (
                        <NavItem
                            key={index}
                            to={navItem.to}
                            title={navItem.title}
                            dropdown={navItem.dropdown}
                            spacing={navItem.class}
                        />
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavList;
