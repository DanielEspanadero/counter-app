import React from "react";
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    return (
        <>
        <h1>Counter App</h1>
        <h2>{value}</h2>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 123
}

export default CounterApp;