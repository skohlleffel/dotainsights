export const selectHeros = (selected) => {
    return {
        type: 'SELECT_HEROS',
        payload: {
            selected_heros: selected
        }
    }
};