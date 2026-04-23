import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
export default function AccountItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <img
                    className={cx('avatar')}
                    src='https://imgcdn.stablediffusionweb.com/2024/9/13/17029559-8ff4-4b3c-ae9b-d5b50c90082c.jpg'
                    alt='avatar'
                />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Nguyen Van A</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>nguyenvanaa</span>
                </div>
            </div>
        </>
    );
}
