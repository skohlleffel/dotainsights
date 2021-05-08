const getHeroMatchDataReducer = (state = [], action) => {
    switch(action.type){
        case 'GET_HERO_MATCH_DATA':
            return action.payload.data;
        default:
            return state;
    }
}
export default getHeroMatchDataReducer;