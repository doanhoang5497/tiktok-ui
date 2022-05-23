import classNames from 'classnames/bind'
import styles from "./Sibar.module.scss";

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <h2>Sibarr</h2>
        </div>
    );
}

export default Sidebar;