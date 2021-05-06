import {useSelector} from 'react-redux';
import { ResponsivePie } from '@nivo/pie';

  
function WinLossTimeChart() {
    const scope = useSelector(state => state.scope)
    const data = useSelector(state => state.openDotaData);
    const duration = useSelector(state => state.gameDuration);
    let wins = 0
    let losses = 0;
    // format data for graphing
    if (data) {data.forEach(element => {
        (element.duration >= duration[0] && element.duration <= duration[1]) ? (element.win === true) ? wins += 1 : losses += 1 : console.log()
    });};
    let graph_data = [
        {
            "id": "wins",
            "label": "wins",
            "value": wins,
        },
        {
            "id": "losses",
            "label": "losses",
            "value": losses,
        }
    ];
    let total_games = wins + losses
    return (
        <>
            {data && scope==='overall' ?
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
            : ''}    
        </>              
    )
};
   
export default WinLossTimeChart;