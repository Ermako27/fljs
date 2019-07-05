import React, {Component} from 'react';
import ActionCreator from '../../../../src/actionCreator';

import Actions from '../actions/actions';
import ToolbarLink from './toolbarLink';
import TodoToolbarStore from '../stores/todoToolbarStore';

export default class TodoToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = TodoToolbarStore.getState();
        TodoToolbarStore.subscribeToRecieveState(this);
    }

    onSetFilter(filter) {
        ActionCreator.create({
            action: Actions.SET_FILTER,
            actionData: {
                filter
            }
        });
    }

    render() {
        return (
            <p>
                Show:{' '}
                <ToolbarLink
                    onClick={() =>
                        this.onSetFilter(this.state.links.SHOW_ALL.filterName)
                    }
                    {...this.state.links.SHOW_ALL}
                >
                    ALL
                </ToolbarLink>
                {', '}
                <ToolbarLink
                    onClick={() =>
                        this.onSetFilter(
                            this.state.links.SHOW_ACTIVE.filterName
                        )
                    }
                    {...this.state.links.SHOW_ACTIVE}
                >
                    ACTIVE
                </ToolbarLink>
                {', '}
                <ToolbarLink
                    onClick={() =>
                        this.onSetFilter(
                            this.state.links.SHOW_COMPLETE.filterName
                        )
                    }
                    {...this.state.links.SHOW_COMPLETE}
                >
                    COMPLETE
                </ToolbarLink>
            </p>
        );
    }
}
