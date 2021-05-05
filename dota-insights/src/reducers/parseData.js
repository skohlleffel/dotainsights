const parseDataReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_DATA':
            var total_kills = action.payload.data.map(a => a.kills).reduce((a, b) => parseFloat(a) + parseFloat(b))
            var total_deaths = action.payload.data.map(a => a.deaths).reduce((a, b) => parseFloat(a) + parseFloat(b))
            var win_loss = []
            action.payload.data.forEach(function(element) {
                if(element.player_slot <= 127 && element.radiant_win) {
                    win_loss.push({
                        win: true,
                        hero: element.hero_id,
                        duration: element.duration
                    })
                } else {
                    win_loss.push({
                        win: false,
                        hero: element.hero_id,
                        duration: element.duration
                    })
                }
            });
            console.log(win_loss);
            return {
                total_kills: total_kills,
                total_deaths: total_deaths
            }
        default:
            return state;
    }
}
export default parseDataReducer;
