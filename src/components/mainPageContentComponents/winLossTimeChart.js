import {useSelector} from 'react-redux';
import { ResponsivePie } from '@nivo/pie';
import {graphOverlay} from "../../styles/graphOverlay";
import dota2Logo from '../../data/dota-2.png';
import "../../styles/css/app.css";

  
function WinLossTimeChart() {
    const scope = useSelector(state => state.scope)
    const data = useSelector(state => state.heroData);
    const duration = useSelector(state => state.gameDuration);
    const heroImageUrl = useSelector(state => state.heroJpeg);
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
    let total_games = wins + losses;
    if (scope === "match_time") {return (
        <>
        {heroImageUrl && total_games !== 0 ?
            <>
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
                <div id="abs" style={graphOverlay.overlay}>
                    <div id="image-cropper">
                    {<img id="hero-img" src={heroImageUrl} alt="Dota Hero"/>}
                    </div>
                </div>
            </>
            : !heroImageUrl && total_games !== 0 ?
            <>
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
                <div id="abs" style={graphOverlay.overlay}>
                    <div id="dota2-logo-cropper">
                    {<img id="dota2-logo" src={dota2Logo} alt="Dota Hero"/>}
                    </div>
                </div>
            </>
            : total_games === 0 && data ?
            <>
                <div id="abs" style={graphOverlay.overlay}>
                    <div id="dota2-logo-cropper">
                        <h1>No Games at this Time Range</h1>
                    </div>
                </div>
            </>
            : ''
        }

        </>              
    )} else {
        return (<div></div>)
    }
};
   
export default WinLossTimeChart;