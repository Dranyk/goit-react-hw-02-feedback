import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './FeedbackButton.module.css';

class FeedbackButton extends Component {
    static defaultProps = {
        items: []
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    render(){
        const {items} = this.props;

        const elements = items.map(({id, text}) =>
                    <button className={css.mainItems} key={id}>{text}</button>
                );

        return (
            <div className={css.main}>
               {elements}
            </div>
        )
    }
}

export default FeedbackButton;

FeedbackButton.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }))
}
