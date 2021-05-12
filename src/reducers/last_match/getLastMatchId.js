
const lastMatchIdReducer = (state = false, action) => {
    switch(action.type){
        case 'GET_LAST_MATCH_ID':
            return action.payload.last_match;
        default:
            return state;
    }
}
export default lastMatchIdReducer;