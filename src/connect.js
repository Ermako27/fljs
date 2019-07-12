import React from 'react';
import Container from './container';
import hoistStatics from 'hoist-non-react-statics';
import createAction from './actionCreator';

/**
 * @param {*} props
 * @return {Function}
 */
function connectAdvanced(props = {}) {
    /**
     * @param {component} component
     * @return {component}
     */
    return function wrapComponent(component) {
        const createWrap = () => {
            return (
                <Container {...props}>
                    {component}
                </Container>
            );
        };
        const name = component.displayName || component.name || `Component`;
        createWrap.displayName = `Container(${name})`;
        createWrap.WrappedComponent = component;
        return hoistStatics(createWrap, component);
    };
};


/**
 * @param {*} store
 * @param {*} handlers
 * @return {Function}
 */
export default function connect({store, handlersToProps}) {
    /**
     * делаем всякие проверки
     * возвращаем вызов функции
     */

    const handlers = handlersToProps ? handlersToProps : {createAction};
    const shouldComponentRecieveState = store ? true : false;
    const props = {
        store,
        handlers,
        shouldComponentRecieveState,
    };
    return connectAdvanced(props);
};
