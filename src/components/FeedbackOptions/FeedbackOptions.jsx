import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
        <>
            <h2 className={css.title}>Please leave feedback</h2>
            <div className={css.buttonBox}>
                {options.map(option => (
                    <button className={css.button} type='button' onClick={() => {
                        onLeaveFeedback(option);
                        }} key={option}>{ option[0].toUpperCase() + option.slice(1) }
                    </button>
                ))}
            </div>
        </>
    );
};

export default FeedbackOptions;