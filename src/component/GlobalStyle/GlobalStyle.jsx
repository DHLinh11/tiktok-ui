import PropTypes from 'prop-types';
import './GlobalStyle.scss';
export default function GlobalStyle({ children }) {
    return children;
}
GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
};
