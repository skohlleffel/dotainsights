import axios from 'axios';


// https://api.opendota.com/api/players/{account_id}/matches

export const fetchData = (acct) => {
    var matchDataUrl = "https://api.opendota.com/api/players/" + acct + "/matches";
    var apiUrl = "https://api.opendota.com/api/heroes";
    return (dispatch) => {
        axios.get(matchDataUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: "FETCH_MATCH_DATA",
                    payload: {
                        data: data
                    }
                })
            })
            .catch(error => {
                throw (error);
            });
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
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