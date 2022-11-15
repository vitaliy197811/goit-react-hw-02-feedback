import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ message }) => {
    return( 
        <>
            <p className={css.message}>{message}</p>
        </>
    );
};

Section.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Section;