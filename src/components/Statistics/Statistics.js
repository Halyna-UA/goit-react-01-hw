import PropTypes from 'prop-types';
import { Container, Title } from './Statistics.styled.js';

function Statistics(props) {
  const { statistics, title } = props;

  return (
    <Container class="statistics">
      <Title class="title">{title.length < 0 ? '' : 'Upload stats'}</Title>

      <ul class="stat-list">
        {props.map(prop => (
          <li class="item" key={statistics.id}>
            <span class="label">{statistics.label}</span>
            <span class="percentage">{statistics.percentage}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};
export default Statistics;
