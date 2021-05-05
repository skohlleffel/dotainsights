import axios from 'axios';


// https://api.opendota.com/api/players/{account_id}/matches
// 83900591

export const fetchData = (acct) => {
    var apiUrl = "https://api.opendota.com/api/players/" + acct + "/matches";
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: "FETCH_DATA",
                    payload: {
                        data: data
                    }
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};