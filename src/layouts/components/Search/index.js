import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind'


import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from '../../../components/Popper'
import { AccountItem } from '../../../components/AccountItem';
import { ClearIcon, SearchIcon, } from '../../../components/Icons';
import { useDebounce } from '../../../hooks';
import * as searchServices from '../../../services/searchService';
const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()
    const debounce = useDebounce(searchValue, 500)
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([])
            return
        }
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debounce)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()
    }, [debounce])
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus()
    }
    const handleHidenResult = () => {
        setShowResult(false)
    }
    const handleChangeInputSearch = (e) => {
        const valueSearch = e.target.value
        if (!valueSearch.startsWith(' ')) {
            setSearchValue(valueSearch)
        }
    }
    return (
        <div>
            <Tippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Tài khoản</h4>
                            {searchResult.map((data) =>
                                <AccountItem key={data.id} className={cx('search-result-item')} data={data} />
                            )}
                            <h4 className={cx('readmore')}>Xem tất cả kết quả dành cho "{debounce}"</h4>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHidenResult}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChangeInputSearch}
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        onFocus={() => setShowResult(true)}
                    />
                    {!loading && !!searchValue && (
                        <button className={cx("btn-clear")} onClick={handleClear}>
                            <ClearIcon />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx("i-loading")} icon={faSpinner} />}
                    <span></span>
                    <button className={cx("btn-search")} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    )
}

export default Search