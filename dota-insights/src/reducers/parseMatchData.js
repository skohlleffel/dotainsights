const parseMatchDataReducer = (state = false, action) => {
    switch(action.type){
        case 'FETCH_MATCH_DATA':
            return action.payload.data
        default:
            return state;
    }
}
export default parseMatchDataReducer;
