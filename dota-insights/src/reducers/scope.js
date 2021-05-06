const scopeReducer = (state = "overall", action) => {
    switch(action.type){
        case 'SET_OVERALL':
            return action.payload.scope;
        case 'SET_HEROS':
            return action.payload.scope;
        default:
            return state;
    }
}
export default scopeReducer;