const gameDurationReducer = (state = [0, 70], action) => {
    switch(action.type){
        case 'SET_GAME_DURATION':
            return action.payload.duration;
        default:
            return state;
    }
}
export default gameDurationReducer;