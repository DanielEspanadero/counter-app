import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0);

    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1)
    };

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp;