import PropTypes from 'prop-types';
import css from './FeedbackButton.module.css';

const FeedbackButton = props => {
    const { buttonName, buttonTitle, onClick } = props;
    return (
      <button
        type="button"
        name={buttonName}
        className={css.mainItems}
        onClick={onClick}
      >
        {buttonTitle}
      </button>
    );
  };
  
  FeedbackButton.propTypes = {
    buttonName: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
  };

export default FeedbackButton;