import PropTypes from 'prop-types';
import FeedbackStatistics from '../FeedbackStatistics/FeedbackStatistics'
import Section from '../Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

const Feedback = props => {
  const { stateData, onChangeStatistic } = props;
  const { total, positivePercentage, ...rest } = stateData;

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={rest} onLeaveFeedback={onChangeStatistic} />
      </Section>
      {!!total.value&&<Section title={'Statistic'}>
        <FeedbackStatistics statistics={stateData} />
      </Section>}
    </div>
  );
};

Feedback.propTypes = {
    title:PropTypes.string,
}

export default Feedback;
