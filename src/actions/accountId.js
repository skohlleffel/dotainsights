export const set_account_id = (acct) => {
    // set account id for open dota api call
    return {
        type: 'SET_ACCOUNT_ID',
        payload: {
            account_id: acct
        }
    }
};