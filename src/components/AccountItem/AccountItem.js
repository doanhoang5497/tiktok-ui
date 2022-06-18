import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('Wrapper')}>
            <img className={cx('avatar')} src='
            https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c92d8e546864f6c7fefea75b271c9baa.jpeg?x-expires=1655712000&x-signature=WlFitLf9FUsq30mqfhZOTh2IhaI%3D
            ' alt='avatar' />
            <div className={cx('info')}>
                <h4>doanhb <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /></h4>
                Hoàng Bá Đoàn
            </div>
        </div>
    );
}

export default AccountItem;