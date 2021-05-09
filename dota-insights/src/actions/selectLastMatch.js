import axios from 'axios';

export const selectLastMatch = (matchId) => {
    var lastMatchUrl = "https://api.opendota.com/api/matches/" + matchId
    return function(dispatch) {
        return axios.get(lastMatchUrl).then(response => {
            return response.data
        })
        .then(data => {
            dispatch({
               type: 'FETCH_LAST_MATCH_DATA',
               payload: {
                   lastMatchData: data
               } 
            });
            dispatch({
                type: 'SET_LAST_MATCH',
                payload: {
                    scope: "last_match"
                }
            })
        })
        .catch(error => {
            throw (error);
        });
    }
}