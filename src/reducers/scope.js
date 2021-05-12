const scopeReducer = (state = "match_time", action) => {
    switch(action.type){
        case 'SET_MATCH_TIME':
            return action.payload.scope;
        case 'SET_LAST_MATCH':
            return action.payload.scope;
        default:
            return state;
    }
}
export default scopeReducer;