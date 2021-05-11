const parseHeroListReducer = (state = false, action) => {
    switch(action.type){
        case 'FETCH_HERO_LIST':
            var heros_list =[];
            action.payload.hero_list.forEach(element => {
                heros_list.push({
                    value: element.id,
                    label: element.localized_name
                })
            });
            heros_list.unshift({
                value: "All Matches",
                label: "All Matches"
            })
            return heros_list
        default:
            return state;
    }
}
export default parseHeroListReducer;