import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper'

import classNames from 'classnames/bind'
import styles from "./Menu.module.scss";
import MenuItem from './MenuItem';
import Header from './Header';


const cx = classNames.bind(styles)



function Menu({ children, items = [] }) {

    return (
        <Tippy
            interactive={true}
            visible
            placement='bottom-end'
            render={attrs => (
                <div className={cx('wrapper')}>
                    <PopperWrapper>
                        <Header title="Ngôn ngữ" />
                        {
                            items.map((item, index) => {
                                return <MenuItem key={index} data={{ item }} />
                            })
                        }
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;