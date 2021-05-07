const herosListReducer = (state = false, action) => {
    switch(action.type){
        case 'GET_HEROS_LIST':
            var heros_list =[];
            action.payload.hero_list.forEach(element => {
                heros_list.push({
                    value: element.id,
                    label: element.localized_name
                })
            })
            return heros_list
        default:
            return state;
    }
}
export default herosListReducer;