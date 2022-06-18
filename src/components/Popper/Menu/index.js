import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper'

import classNames from 'classnames/bind'
import styles from "./Menu.module.scss";
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';


const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const currentMenu = history[history.length - 1]
    return (
        <Tippy
            delay={[0, 500]}
            interactive={true}
            offset={[12, 8]}
            visible
            placement='bottom-end'
            render={attrs => (
                <div className={cx('wrapper')}>
                    <PopperWrapper>
                        {
                            history.length > 1 &&
                            <Header
                                title="Ngôn ngữ"
                                onBack={() => {
                                    setHistory(prev => prev.slice(0, prev.length - 1))
                                }}
                            />
                        }

                        {
                            currentMenu.data.map((item, index) => {
                                const isParent = !!item.children
                                return <MenuItem
                                    key={index}
                                    data={{ item }}
                                    onClick={() => {
                                        if (isParent) {
                                            setHistory(prev => [...prev, item.children])
                                        } else {
                                            onChange(item)
                                        }
                                    }} />
                            })
                        }
                    </PopperWrapper>
                </div>
            )
            }
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy >
    );
}

export default Menu;