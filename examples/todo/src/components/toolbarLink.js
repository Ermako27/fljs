import React from 'react';
import PropTypes from 'prop-types';

const ToolbarLink = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};

export default ToolbarLink;

ToolbarLink.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};
