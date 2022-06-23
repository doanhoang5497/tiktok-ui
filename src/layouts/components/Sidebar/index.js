import classNames from 'classnames/bind'
import styles from "./Sidebar.module.scss";
import config from "../../../config"
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, PeopleActiveIcon, PeopleIcon } from '../../../components/Icons';

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem titile="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem titile="Đang Follow" to={config.routes.following} icon={<PeopleIcon />} iconActive={<PeopleActiveIcon />} />
                <MenuItem titile="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
            </Menu>
        </div>
    );
}

export default Sidebar;