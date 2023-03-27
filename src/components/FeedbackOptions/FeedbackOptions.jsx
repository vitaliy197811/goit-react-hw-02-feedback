import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
        <>
            <div className={css.buttonBox}>
                {options.map(option => (
                    <button
                        className={css.button}
                        type='button'
                        onClick={() => onLeaveFeedback(option)}
                        key={option}>
                        {option[0].toUpperCase() + option.slice(1)}
                    </button>
                ))}
            </div>
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;