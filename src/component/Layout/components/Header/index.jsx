import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import {
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
import Button from '../../../Button';
import styles from './Header.module.scss';
import Logo from '../../../../assets/Logo';
import Menu from '../../../Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Image from '../../../Image';
import Search from '../search/Search';

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
    const imageRef = useRef();
    const currentUser = true;
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
                    <Search />

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
                                        <div className={cx('notice')}>12</div>
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
                                <Image
                                    ref={imageRef}
                                    className={cx('user-avatar')}
                                    src=''
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
