class TodoToolbarLogic {
    setFilter({state, payload = {}} = {}) {
        state.links[state.currentFilter].active = false;
        state.links[payload.filter].active = true;
        state.currentFilter = payload.filter;
    }
}

export default new TodoToolbarLogic();
