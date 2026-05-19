import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '..';
import MenuItems from './MenuItems';
import HeaderMenu from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
export default function Menu({ children, items = [], hideOnClick = false, onchange }) {
	const [history, setHistory] = useState([{ data: items }]);
	const current = history[history.length - 1];

	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children;
			return (
				<MenuItems
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory((prev) => [...prev, item.children]);
						} else {
							onchange(item);
						}
					}}
				/>
			);
		});
	};
	return (
		<div>
			<Tippy
				interactive
				delay={[0, 700]}
				offset={[12, 8]}
				hideOnClick={hideOnClick}
				placement='bottom-end'
				render={(attrs) => (
					<div
						className={cx('menu-list')}
						tabIndex='-1'
						{...attrs}>
						<PopperWrapper className={cx('menu-popper')}>
							{history.length > 1 && (
								<HeaderMenu
									title={current.title}
									onBack={() => {
										setHistory((prev) => prev.slice(0, prev.length - 1));
									}}></HeaderMenu>
							)}
							<div className={cx('menu-body')}> {renderItems()}</div>
						</PopperWrapper>
					</div>
				)}
				onHide={() => {
					setHistory((prev) => prev.slice(0, 1));
				}}>
				{children}
			</Tippy>
		</div>
	);
}
Menu.propTypes = {
	children: PropTypes.node.isRequired,
	items: PropTypes.array,
	hideOnClick: PropTypes.bool,
	onchange: PropTypes.func,
};
