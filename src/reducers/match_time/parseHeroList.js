import dota2Image from '../../data/dota-2.png'

const parseHeroListReducer = (state = false, action) => {
    switch(action.type){
        case 'FETCH_HERO_LIST':
            var heros_list =[];
            action.payload.hero_list.forEach(element => {
                heros_list.push({
                    value: element.id,
                    label: element.localized_name,
                    heroImage: <img src={"http://cdn.dota2.com/apps/dota2/images/heroes/" + element.name.replace("npc_dota_hero_", "") + "_sb.png"} alt={element.localized_name} />,
                })
            });
            heros_list.unshift({
                value: "All Matches",
                label: "All Matches",
                heroImage:  <img src={dota2Image} alt={"All Matches"} width={"59px"} height={"33px"} />
            })
            return heros_list
        default:
            return state;
    }
}
export default parseHeroListReducer;