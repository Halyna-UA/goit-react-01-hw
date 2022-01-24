import PropTypes from 'prop-types';
import { Container, Title, List, Item, StatisticsData } from './Statistics.styled.js';

function Statistics(props) {
  const { elements, title } = props;

  return (
    <Container class="statistics">
      {title && <Title class="title">{title}</Title>}

      <List class="stat-list">
        {elements.map(({ id, label, percentage }) => (
          <Item class="item" key={id}>
            <StatisticsData class="label">{label}</StatisticsData>
            <StatisticsData class="percentage">{percentage} %</StatisticsData>
          </Item>
        ))}
      </List>
    </Container>
  );
}

Statistics.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};
export default Statistics;
