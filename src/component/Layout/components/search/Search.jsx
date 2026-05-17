// import
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../component/Popper';
import AccountItem from '../../../component/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as searchServices from '../../../services/searchService';
import { useDebounce } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

//content

const cx = classNames.bind(styles);
export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const deBounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!deBounce.trim()) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(deBounce);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [deBounce]);

    // handle logic
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex='-1'
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    data={result}
                                />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <span>
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            type='text'
                            placeholder='Search account and videos'
                            onChange={handleChange}
                            onFocus={() => {
                                setShowResult(true);
                            }}
                        />
                        {!!searchValue && !loading && (
                            <button
                                className={cx('clear')}
                                onClick={() => {
                                    setSearchValue('');
                                    inputRef.current.focus();
                                }}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}

                        {loading && (
                            <FontAwesomeIcon
                                className={cx('loading')}
                                icon={faSpinner}
                            />
                        )}

                        <button
                            className={cx('search-btn')}
                            onMouseDown={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </span>
            </HeadlessTippy>
        </div>
    );
}
