import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '../../Popper'

import classNames from 'classnames/bind'
import styles from "./Menu.module.scss";
import MenuItem from './MenuItem';


const cx = classNames.bind(styles)



function Menu({ children, items = [] }) {

    return (
        <Tippy
            interactive={true}
            visible
            placement='bottom-end'
            render={attrs => (
                <PopperWrapper>
                    {
                        items.map((item, index) => {
                            return <MenuItem key={index} data={{ item }} />
                        })
                    }
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;