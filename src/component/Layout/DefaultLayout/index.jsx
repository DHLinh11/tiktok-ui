import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header/index.jsx';
import Sidebar from './SideBar/index.jsx';

const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </>
    );
}
