import PropTypes from 'prop-types';
import FeedbackStatistics from '../FeedbackStatistics/FeedbackStatistics'
import Section from '../Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';

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
      {!total.value&&<Section title={'Statistic'}>
      <Notification message="There is no feedback" />
      </Section>}
    </div>
  );
};

Feedback.propTypes = {
    title:PropTypes.string,
}

export default Feedback;
