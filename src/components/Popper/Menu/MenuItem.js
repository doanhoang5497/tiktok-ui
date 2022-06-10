import { Button } from "../../Button";
import classNames from 'classnames/bind'
import styles from "./Menu.module.scss";


const cx = classNames.bind(styles)

function MenuItem({ data }) {
    return (
        <div className={cx('item-menu')}>
            <Button to={data.item.to} className={data.item.to && cx('item-link')}>
                {data.item.icon}
                {data.item.title}
            </Button>
        </div>
    );
}

export default MenuItem;