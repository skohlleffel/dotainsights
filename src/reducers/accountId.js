const accountIdReducer = (state = false, action) => {
    switch(action.type){
        case 'SET_ACCOUNT_ID':
            return action.payload.account_id;
        default:
            return state;
    }
}
export default accountIdReducer;