import {useSelector, useDispatch} from 'react-redux';
import {setGameDuration} from '../../actions/match_time/setGameDuration';
import Slider, { SliderTooltip} from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const { Handle } = Slider;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};
  
function RangeSlider() {
    const data = useSelector(state => state.openDotaData);
    const duration = useSelector(state => state.gameDuration);
    const scope = useSelector(state => state.scope);
    const dispatch = useDispatch();

    return (
        <div>
            {data && scope === "match_time" ?
              <div>
                <h2 style={{textAlign: "center", paddingBottom: "20px"}}>Use the slider to select a match time range.</h2>
                <Range 
                value={duration} 
                allowCross={false}
                onChange={(value) => dispatch(setGameDuration(value))}
                handle={handle}
                tipFormatter={function time_convert(num)
                    { 
                     var hours = Math.floor(num / 60);  
                     var minutes = num % 60;
                     return hours + "h " + minutes + "m";        
                   }}
                />
              </div>
        : ''}
        </div>
    )
};
   
export default RangeSlider;