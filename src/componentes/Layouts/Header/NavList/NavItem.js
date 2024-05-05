import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavList.module.scss';

const cx = classNames.bind(styles);

function NavItem({ to, title, dropdown, spacing = '' }) {
    return (
        <div>
            {dropdown ? (
                <div className={cx('nav-dropdown')}>
                    <div className={cx('nav-item', `${spacing}`)}>
                        <NavLink className={cx('nav-item-text')} to={to}>
                            {title}
                        </NavLink>
                    </div>
                    <ul className={cx('nav-drop__list')}>
                        {dropdown.map((dropItem, index) => (
                            <li className={cx('nav-item-text')} key={index}>
                                <NavLink to={dropItem.to}>
                                    {dropItem.key}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className={cx('nav-item', `${spacing}`)}>
                    <NavLink className={cx('nav-item-text')} to={to}>
                        {title}
                    </NavLink>
                </div>
            )}
        </div>
    );
}

export default NavItem;
