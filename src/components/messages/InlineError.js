import React from 'react';
import PropsTypes from 'prop-types';

const InlineError = ({text}) => (
    <span style={{color:"#ae5456"}}>
        {text}
    </span>
);

InlineError.PropsTypes = {
    text: PropsTypes.string.isRequired
};

export default InlineError;