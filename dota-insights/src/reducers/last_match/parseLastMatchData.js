const parseLastMatchDataReducer = (state = false, action) => {
    switch(action.type){
        case 'FETCH_LAST_MATCH_DATA':
            return action.payload.lastMatchData
        default:
            return state;
    }
}
export default parseLastMatchDataReducer;