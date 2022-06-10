import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('Wrapper')}>
            <img className={cx('avatar')} src='
            https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e86867bdcd0d0fa4649f4731b60677ad~c5_100x100.jpeg?x-expires=1655024400&x-signature=ETBPntpSes8xc1bjUxBeixUzHfw%3D
            ' alt='avatar' />
            <div className={cx('info')}>
                <h4>doanhb <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /></h4>
                Hoàng Bá Đoàn
            </div>
        </div>
    );
}

export default AccountItem;