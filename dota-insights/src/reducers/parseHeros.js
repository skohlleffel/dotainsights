const parseHerosReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_HEROS_DATA':
            var heros = [];
            action.payload.heros_data.forEach((row) => heros.push({
                value: row.id, 
                label: row.localized_name
            }));
            return heros
        default:
            return state;
    }
}
export default parseHerosReducer;