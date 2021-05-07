import axios from 'axios';

export const selectHeros = () => {
    var apiUrl = "https://api.opendota.com/api/heroes";
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: "GET_HEROS_LIST",
                    payload: {
                        hero_list: data
                    }
                })
            })
            .then(dispatch({
                type: "SET_HEROS",
                payload: {
                    scope: "heros",
                }
            }))
            .catch(error => {
                throw (error);
            });
    };
};