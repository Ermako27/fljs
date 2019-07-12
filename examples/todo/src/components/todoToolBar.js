import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ToolbarLink from './toolbarLink';

export default class TodoToolBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                Show:{' '}
                <ToolbarLink
                    onClick={() =>
                        this.props.onSetFilter(
                            this.props.links.SHOW_ALL.filterName
                        )
                    }
                    {...this.props.links.SHOW_ALL}
                >
                    ALL
                </ToolbarLink>
                {', '}
                <ToolbarLink
                    onClick={() =>
                        this.props.onSetFilter(
                            this.props.links.SHOW_ACTIVE.filterName
                        )
                    }
                    {...this.props.links.SHOW_ACTIVE}
                >
                    ACTIVE
                </ToolbarLink>
                {', '}
                <ToolbarLink
                    onClick={() =>
                        this.props.onSetFilter(
                            this.props.links.SHOW_COMPLETE.filterName
                        )
                    }
                    {...this.props.links.SHOW_COMPLETE}
                >
                    COMPLETE
                </ToolbarLink>
            </p>
        );
    }
}

TodoToolBar.propTypes = {
    onSetFilter: PropTypes.func.isRequired,
    links: PropTypes.object,
};
