import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItems from './MenuItems';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
export default function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            appendTo={document.body}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
