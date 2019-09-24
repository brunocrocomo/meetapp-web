import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { setHours, setMinutes } from 'date-fns';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder }) {
    const ref = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [selected, setSelected] = useState(defaultValue);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: ref.current,
            path: 'props.selected',
            clearValue: pickerRef => {
                pickerRef.clear();
            },
        });
    }, [ref.current, fieldName]); //eslint-disable-line

    return (
        <>
            <ReactDatePicker
                name={fieldName}
                selected={selected}
                onChange={date => setSelected(date)}
                placeholderText={placeholder}
                showTimeSelect
                minDate={new Date()}
                minTime={setHours(setMinutes(new Date(), 0), 17)}
                maxTime={setHours(setMinutes(new Date(), 30), 23)}
                dateFormat="dd/MM/yyyy, à's' HH:mm"
                autoComplete="off"
                ref={ref}
            />
            {error && <span>{error}</span>}
        </>
    );
}

DatePicker.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
    placeholder: '',
};
