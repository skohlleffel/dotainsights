export const getHeroMatchData = (matchData, id) => {
    var data = [];
    if (id.value === "All Matches") {
        data = matchData
    } else {
        matchData.forEach(element => {
            (element.hero === id.value) ? data.push(element) : console.log()
        })
    }
    return {
        type: 'GET_HERO_MATCH_DATA',
        payload: {
            data: data
        }
    }
};