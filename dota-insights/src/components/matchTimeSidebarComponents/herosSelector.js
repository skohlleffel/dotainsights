import Select, {components} from 'react-select';
import makeAnimated from 'react-select/animated';
import {useDispatch, useSelector} from 'react-redux';
import {getHeroMatchData} from '../../actions/match_time/getHeroMatchData';
import {Row, Col} from 'react-bootstrap';

const animatedComponents = makeAnimated();

const { Option } = components;

const CustomSelectOption = props => (
  <Option {...props}>
    <Row>
      <Col className="my-2">
        {props.data.heroImage}
      </Col>
      <Col className="my-3">
        {props.data.label}
      </Col>
    </Row>
  </Option>
);

const CustomSelectValue = props => (
  <Row>
    <Col className="my-2">
      {props.data.heroImage}
    </Col>
    <Col className="mx-1 my-3">
      {props.data.label}
    </Col>
  </Row>
)

function HerosSelector() {
  const heros_list = useSelector(state => state.herosList);
  const matchData = useSelector(state => state.openDotaData);
  const scope = useSelector(state => state.scope);
  const dispatch = useDispatch();

  return (
      <div>
          {scope==='match_time' && matchData ?
            <Select
            closeMenuOnSelect={false}
            options={heros_list}
            onChange={(value) => dispatch(getHeroMatchData(matchData, value))}
            maxMenuHeight={400}
            // eslint-disable-next-line
            components={animatedComponents, { Option: CustomSelectOption, SingleValue: CustomSelectValue }}
          />
      : ''}
      </div>
  )
};
 
export default HerosSelector;