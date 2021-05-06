import {useSelector, useDispatch} from 'react-redux';
import {setGameDuration} from '../actions/setGameDuration';
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
    const dispatch = useDispatch();

    return (
        <div>
            {data ?
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
        : ''}
        </div>
    )
};
   
export default RangeSlider;