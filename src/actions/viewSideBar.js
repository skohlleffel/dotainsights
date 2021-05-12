export const viewSideBar = (view) => {
    return {
        type: 'SET_SIDE_BAR',
        payload: {
            viewSideBar: view
        }
    }
};