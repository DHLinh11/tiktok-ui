import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Button';
import styles from './Header.module.scss';
import Logo from '../../../../assets/Logo';
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';

const MENU_ITEMS = [
    { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and Help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];
const cx = classNames.bind(styles);
export default function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <Logo />
                    </div>
                    <Tippy
                        interactive
                        appendTo={document.body}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <span>
                            <div className={cx('search')}>
                                <input type='text' placeholder='Search acount and videos' />
                                <button className={cx('clear')}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                <button className={cx('loading')}>
                                    <FontAwesomeIcon icon={faSpinner} />
                                </button>

                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </span>
                    </Tippy>

                    <div className={cx('actions')}>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>
                        <Menu items={MENU_ITEMS}>
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    );
}
