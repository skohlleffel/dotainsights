export const selectLastMatch = () => {
    return {
        type: 'SET_LAST_MATCH',
        payload: {
            scope: "last_match"
        }
    }
};