import { Button } from "../../Button";
import classNames from 'classnames/bind'
import styles from "./Menu.module.scss";


const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    const classes = cx('item-menu', {
        sparate: data.item.sparate
    })
    return (
        <div className={classes}>
            <Button to={data.item.to} className={data.item.to && cx('item-link')} onClick={onClick}>
                {data.item.icon}
                {data.item.title}
            </Button>
        </div>
    );
}

export default MenuItem;