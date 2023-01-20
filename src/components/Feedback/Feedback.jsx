import PropTypes from 'prop-types';
import { Component } from 'react';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import FeedbackStatistics from '../FeedbackStatistics/FeedbackStatistics'
import buttonItems from '../../data/data.json';
import Section from '../Section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackButton items={buttonItems} />
        </Section>
        <Section title={'Statistics'}>
          <FeedbackStatistics />
        </Section>
      </div>
    );
  }
}

Feedback.propTypes = {
    title:PropTypes.string,
}

export default Feedback;
