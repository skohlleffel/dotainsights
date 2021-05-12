const viewSideBarReducer = (state = false, action) => {
    switch(action.type){
        case 'SET_SIDE_BAR':
            return action.payload.viewSideBar;
        default:
            return state;
    }
}
export default viewSideBarReducer;