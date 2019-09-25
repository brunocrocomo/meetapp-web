import React from 'react';
import PropTypes from 'prop-types';

import { FaSpinner } from 'react-icons/fa';

import Button from './styles';

export default function Index({ loading, icon, label, ...rest }) {
    return (
        <Button loading={loading ? 1 : 0} {...rest}>
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
    onClick: PropTypes.func,
};

Index.defaultProps = {
    label: '',
    icon: null,
    backgroundColor: '#f94d6a',
    loading: false,
    onClick: undefined,
};
