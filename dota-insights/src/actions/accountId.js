export const set_account_id = (acct) => {
    return {
        type: 'SET_ACCOUNT_ID',
        payload: {
            account_id: acct
        }
    }
};