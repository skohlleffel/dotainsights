const selectHerosReducer = (state = [], action) => {
    switch(action.type){
        case 'SELECT_HEROS':
            return action.payload.selected_heros;
        default:
            return state;
    }
}
export default selectHerosReducer;