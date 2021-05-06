import {useSelector} from 'react-redux';
import { ResponsivePie } from '@nivo/pie';

  
function HeroSpecificTimeChart() {
    const scope = useSelector(state => state.scope);
    const data = useSelector(state => state.openDotaData);
    const duration = useSelector(state => state.gameDuration);
    const selectedHeros = useSelector(state => state.selectedHeros);
    let g = [];
    // format data for graphing
    if (selectedHeros && data) {
        selectedHeros.forEach(element => {
            let wins = 0;
            let losses = 0;
            let h = {
                "name": element.label,
                "id": element.value,
                "wins": wins,
                "losses": losses
            };
            data.forEach(item =>{
                (item.duration >= duration[0] && item.duration <= duration[1] && item.hero === element.value) ? (item.win === true) ? h.wins += 1 : h.losses += 1 : console.log()
            }
        );
        if (element.value === h.id) {
            g.push(h);
        }    
    });
    };

    return  (
    <>
        {selectedHeros && scope==='heros' ? g.map(function(row) {
        let graph_data = [
            {
                "id": "wins",
                "label": "wins",
                "value": row.wins,
            },
            {
                "id": "losses",
                "label": "losses",
                "value": row.losses,
            }
        ];
        let total_games = row.wins + row.losses
        return (
            <ResponsivePie
            data={graph_data}
            margin={{ top: 70, right: 0, bottom: 70, left: 0 }}
            colors={{ scheme: 'category10' }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor="#333333"
            arcLabel={function(e){return (e.value/total_games*100).toFixed(2) + "%"}}
        />
        )})
     : ""}
    </>
    )
};
   
export default HeroSpecificTimeChart;