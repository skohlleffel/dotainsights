const parseHerosReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_HERO_DATA':
                var hero_win_loss = [];
                action.payload.data.forEach(function(element) {
                    // radiant win
                    if(element.player_slot <= 127 && element.radiant_win) {
                        hero_win_loss.push({
                            win: true,
                            hero: element.hero_id,
                            duration: element.duration / 60
                        })
                    // dire win
                    } else if (element.player_slot >= 127 && element.radiant_win === false) {
                        hero_win_loss.push({
                            win: true,
                            hero: element.hero_id,
                            duration: element.duration / 60
                        })
                    // dire and radiant loss
                    } else {
                        hero_win_loss.push({
                            win: false,
                            hero: element.hero_id,
                            duration: element.duration / 60
                        })
                    }
                });
                return hero_win_loss;
        default:
            return state;
    }
}
export default parseHerosReducer;