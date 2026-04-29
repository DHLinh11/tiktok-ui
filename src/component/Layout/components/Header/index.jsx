import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudArrowDown,
    faUser,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Button';
import styles from './Header.module.scss';
import Logo from '../../../../assets/Logo';
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        // children 1
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    // children 2
                    children: {
                        title: 'Language',
                        data: [
                            {
                                code: 'en',
                                title: 'English2',
                                // children 3
                                children: {
                                    title: 'Language',
                                    data: [
                                        { code: 'en', title: 'English3' },
                                        { code: 'vi', title: 'Tiếng Việt3' },
                                        {
                                            code: 'japanese',
                                            title: 'Japanese3',
                                        },
                                    ],
                                },
                            },
                            { code: 'vi', title: 'Tiếng Việt2' },
                            { code: 'japanese', title: 'Japanese2' },
                        ],
                    },
                },
                { code: 'vi', title: 'Tiếng Việt' },
                { code: 'japanese', title: 'Japanese' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoa',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
const cx = classNames.bind(styles);
export default function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    // handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <Logo />
                    </div>
                    <HeadlessTippy
                        interactive
                        appendTo={document.body}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div
                                className={cx('search-result')}
                                tabIndex='-1'
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
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
                                <input
                                    type='text'
                                    placeholder='Search account and videos'
                                />
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
                    </HeadlessTippy>

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Tippy
                                    delay={[0, 200]}
                                    content='Upload Video'
                                    placement='bottom'
                                >
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon
                                            icon={faCloudArrowDown}
                                        />
                                    </button>
                                </Tippy>
                                <Tippy
                                    delay={[0, 200]}
                                    content='Messengers'
                                    placement='bottom'
                                >
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Log in</Button>
                            </>
                        )}

                        <Menu
                            items={currentUser ? userMenu : MENU_ITEMS}
                            onchange={handleMenuChange}
                        >
                            {currentUser ? (
                                <img
                                    className={cx('user-avatar')}
                                    src='https://img.freeimg.org/assets/images/posts/fake/thumb/69ef61515464e_ethereal-woman-with-glowing-hair-desktop-wallpaper.png'
                                    alt='Nguyen Van A'
                                />
                            ) : (
                                <>
                                    <button className={cx('more-button')}>
                                        <FontAwesomeIcon
                                            icon={faEllipsisVertical}
                                        ></FontAwesomeIcon>
                                    </button>
                                </>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    );
}
