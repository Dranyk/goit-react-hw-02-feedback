import PropTypes from 'prop-types';
import FeedbackButton from 'components/FeedbackButton/FeedbackButton';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <>
        {Object.keys(options).map(key => (
          <FeedbackButton
            key={key}
            buttonName={key}
            buttonTitle={options[key].name}
            onClick={onLeaveFeedback}
          />
        ))}
      </>
    );
  };
  
  
  FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.shape({ 
    }).isRequired
  };

  export default FeedbackOptions;