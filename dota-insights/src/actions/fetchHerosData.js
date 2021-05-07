import axios from 'axios';


// https://api.opendota.com/api/players/{account_id}/matches?hero_id={hero_id}

export const fetchHerosData = (acct, id) => {
    
    var apiUrl = "https://api.opendota.com/api/players/" + acct + "/matches?hero_id=" +id.value;
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: "FETCH_HERO_DATA",
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