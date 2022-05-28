import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('Wrapper')}>
            <img className={cx('avatar')} src='https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/9a8a5e7e3a49056a08e8f9adccfe8961~c5_300x300.webp?x-expires=1653814800&x-signature=NK0BLPOW97iN2OMUvsKlReDbKiY%3D' alt='avatar' />
            <div className={cx('info')}>
                <h4>doanhb <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /></h4>
                Hoàng Bá Đoàn
            </div>
        </div>
    );
}

export default AccountItem;