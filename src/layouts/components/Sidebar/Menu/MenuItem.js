import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind'
import styles from "./Menu.module.scss";


const cx = classNames.bind(styles)

function Menu({ titile, to, icon, iconActive }) {
    return (
        <NavLink to={to} className={(active) => cx('menu-item', { active: active.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{iconActive}</span>
            <span className={cx('title')}>{titile}</span>
        </NavLink>
    );
}
Menu.propTypes = {
    titile: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}
export default Menu;