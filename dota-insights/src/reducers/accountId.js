const accountIdReducer = (state = "83900591", action) => {
    switch(action.type){
        case 'SET_ACCOUNT_ID':
            return action.payload.account_id;
        default:
            return state;
    }
}
export default accountIdReducer;