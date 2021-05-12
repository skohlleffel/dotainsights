import axios from 'axios';


// https://api.opendota.com/api/players/{account_id}/matches

// called when user submits open dota ID
export const fetchData = (acct) => {
    // fetch dota heros and player match data from open dota
    var matchDataUrl = "https://api.opendota.com/api/players/" + acct + "/matches";
    var dotaHeroesUrl = "https://api.opendota.com/api/heroes";

    // async dispatch to reducers
    return (dispatch) => {
        // open dota player match data api call
        axios.get(matchDataUrl)
            .then(response => {
                return response.data
            })
            // dispatch match data to "fetch match data" reducer
            .then(data => {
                dispatch({
                    type: "FETCH_MATCH_DATA",
                    payload: {
                        data: data
                    }
                });
                // use match data all heroes as default pie graph
                // dispatch match data to "get hero match data reducer" reducer
                // parses match data and transforms for winLossTimeChart
                 dispatch({
                    type: 'GET_HERO_MATCH_DATA',
                    payload: {
                        data: data
                    }
                });
                dispatch({
                    type: 'GET_LAST_MATCH_ID',
                    payload: {
                        last_match: data[0].match_id
                    }
                });
                dispatch({
                    type: "FETCH_HERO_JPEG",
                    payload: {
                        heroJpeg: false
                    },
                })
            })
        // open dota heroes api call
        return axios.get(dotaHeroesUrl)
            .then(response => {
                return response.data
            })
            // dispatch to "fetch hero List" reducer
            // used in the herosSelector component
            .then(data => {
                dispatch({
                    type: "FETCH_HERO_LIST",
                    payload: {
                        hero_list: data
                    }
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};