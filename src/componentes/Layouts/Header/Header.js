import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import NavList from './NavList/NavList';

const cx = classNames.bind(styles);

function Header() {
    return (
        <Container fluid className={cx('header')}>
            <NavList />
        </Container>
    );
}

export default Header;
