const parseDataReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_DATA':
            var win_loss = [];
            action.payload.data.forEach(function(element) {
                if(element.player_slot <= 127 && element.radiant_win) {
                    win_loss.push({
                        win: true,
                        hero: element.hero_id,
                        duration: element.duration,
                        team: element.with_hero_id,
                        enemies: element.against_hero_id
                    })
                } else {
                    win_loss.push({
                        win: false,
                        hero: element.hero_id,
                        duration: element.duration,
                        team: element.with_hero_id,
                        enemies: element.against_hero_id
                    })
                }
            });
            console.log(win_loss);
            return win_loss;
        default:
            return state;
    }
}
export default parseDataReducer;
