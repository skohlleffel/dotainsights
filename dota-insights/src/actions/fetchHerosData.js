import axios from 'axios';

export const fetchHerosData = () => {
    var apiUrl = "https://api.opendota.com/api/heroes";
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: "FETCH_HEROS_DATA",
                    payload: {
                        heros_data: data
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