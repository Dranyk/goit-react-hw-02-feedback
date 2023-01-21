import PropTypes from 'prop-types';
import css from './FeedbackStatistics.module.css'

const FeedbackStatistics = ({ statistics }) => {
  const items = Object.values(statistics);
return (
  <>
    <ul className={css.list}>
      {items.map(({ name, value }) => (
        <li key={name}>
          <p>
            {name}: {value}
          </p>
        </li>
      ))}
    </ul>
  </>
);
};


export default FeedbackStatistics;

FeedbackStatistics.propTypes = {
   name:PropTypes.string,
   value:PropTypes.number,
}
