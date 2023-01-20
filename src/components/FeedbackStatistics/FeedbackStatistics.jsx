import PropTypes from 'prop-types';
import { Component } from 'react';

class FeedbackStatistics extends Component {
  static defaultProps = {
    items: [
      { name: 'Good', value: 0 },
      { name: 'Neutral', value: 0 },
      { name: 'Bad', value: 0 },
    ],
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { items } = this.props;

    const elements = items.map(({ name, value }) => (
      <li key={name}>
        <p>
          {name}: {value}
        </p>
      </li>
    ));

    return <ul>{elements}</ul>;
  }
}

export default FeedbackStatistics;

FeedbackStatistics.propTypes = {
   name:PropTypes.string.isRequired,
   value:PropTypes.number.isRequired,
}
