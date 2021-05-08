const parseMatchDataReducer = (state = false, action) => {
    switch(action.type){
        case 'FETCH_MATCH_DATA':
            var win_loss = [];
            action.payload.data.forEach(function(element) {
                // radiant win
                if(element.player_slot <= 127 && element.radiant_win) {
                    win_loss.push({
                        win: true,
                        hero: element.hero_id,
                        duration: element.duration / 60
                    })
                // dire win
                } else if (element.player_slot >= 127 && element.radiant_win === false) {
                    win_loss.push({
                        win: true,
                        hero: element.hero_id,
                        duration: element.duration / 60
                    })
                // dire and radiant loss
                } else {
                    win_loss.push({
                        win: false,
                        hero: element.hero_id,
                        duration: element.duration / 60
                    })
                }
            });
            return win_loss;
        default:
            return state;
    }
}
export default parseMatchDataReducer;
