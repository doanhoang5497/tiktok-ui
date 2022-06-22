import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';
import styles from "./Button.module.scss";

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    children,
    cssSmall,
    cssMedium,
    cssLarge,
    cssUpload,
    cssLogin,
    cssFollow,
    cssDownLoadApp,
    onClick,
    ...passProps
}) {
    let Comp = "button"
    const props = {
        onClick,
        ...passProps
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = "a"
    }
    const classes = cx("wrapper", {
        cssSmall,
        cssMedium,
        cssLarge,
        cssUpload,
        cssLogin,
        cssFollow,
        cssDownLoadApp
    })
    return (
        <Comp className={classes} {...props} {...passProps}>
            <span>{children}</span>
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    cssSmall: PropTypes.bool,
    cssMedium: PropTypes.bool,
    cssLarge: PropTypes.bool,
    cssUpload: PropTypes.bool,
    cssLogin: PropTypes.bool,
    cssFollow: PropTypes.bool,
    cssDownLoadApp: PropTypes.bool,
    onClick: PropTypes.func,
}
export default Button;