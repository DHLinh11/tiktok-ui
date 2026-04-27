import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function Sidebar() {
    return (
        <>
            <aside className={cx('wrapper')}>
                <h2>Sidebar</h2>
            </aside>
        </>
    );
}
