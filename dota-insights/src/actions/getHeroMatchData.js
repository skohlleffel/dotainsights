import {heroNames} from '../data/heroNames';

export const getHeroMatchData = (matchData, id) => {

    // build hero picture api url
    var heroImageApiUrl = "http://cdn.dota2.com/apps/dota2/images/heroes/" + id.label.replace(" ", "_").toLowerCase() + "_vert.jpg"; 

    heroNames.forEach(element => {
        (element.id === id.value) ? heroImageApiUrl = "http://cdn.dota2.com/apps/dota2/images/heroes/" + element.name.replace("npc_dota_hero_", "") + "_vert.jpg" : console.log();
    })
    
    // parse match data for all or specific hero wins
    var hero_data = [];
        if (id.value === "All Matches") {
            hero_data = matchData
        } else {
            matchData.forEach(element => {
                (element.hero_id === id.value) ? hero_data.push(element) : console.log()
            })
        }

    // make calls to reducers
    return function(dispatch) {
        dispatch({
            type: "FETCH_HERO_JPEG",
            payload: {
                heroJpeg: heroImageApiUrl
            },
        })
        dispatch(
            {
                type: 'GET_HERO_MATCH_DATA',
                payload: {
                    data: hero_data
                }
            }
        )
    }
}