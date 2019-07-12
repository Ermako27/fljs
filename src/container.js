import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Container extends Component {
    constructor(props) {
        super(props);
        // TODO как-то избавиться от проверок в коснтрукторе
        if (this.props.shouldComponentRecieveState) {
            this.state = this.props.store.getState();
        }
    }

    componentDidMount() {
        if (this.props.shouldComponentRecieveState) {
            this.props.store.subscribeToRecieveState(this);
        }
    }

    componentWillUnmount() {
        this.props.store.unsubscribe(this);
    }

    render() {
        const WrappedComponent = this.props.children;
        return (
            <WrappedComponent {...this.state} {...this.props.handlers}/>
        );
    }
}

Container.propTypes = {
    store: PropTypes.shape({
        getState: PropTypes.func.isRequired,
        unsubscribe: PropTypes.func.isRequired,
        subscribeToRecieveState: PropTypes.func.isRequired,
    }),
    handlers: PropTypes.object,
    shouldComponentRecieveState: PropTypes.bool.isRequired,
    children: PropTypes.any,
};
