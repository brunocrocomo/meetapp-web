import React from 'react';
import PropTypes from 'prop-types';

import { FaSpinner } from 'react-icons/fa';

import Button from './styles';

export default function Index(props) {
    const { loading, icon, label } = props;
    return (
        <Button {...props}>
            {loading ? (
                <FaSpinner color="#fff" size={25} />
            ) : (
                <>
                    {icon}
                    {label}
                </>
            )}
        </Button>
    );
}

Index.propTypes = {
    type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
    label: PropTypes.string,
    icon: PropTypes.element,
    backgroundColor: PropTypes.string,
    loading: PropTypes.bool,
};

Index.defaultProps = {
    label: '',
    icon: null,
    backgroundColor: '#f94d6a',
    loading: false,
};
