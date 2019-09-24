import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export default styled.button.attrs(props => ({
    type: props.type,
    disabled: props.loading,
    onClick: props.onClick,
}))`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 42px;
    border: 0;
    border-radius: 4px;
    background: ${props => props.backgroundColor};
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
        background: ${props => darken(0.1, props.backgroundColor)};
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${props =>
        props.loading
            ? css`
                  svg {
                      animation: ${rotate} 2s linear infinite;
                  }
              `
            : css`
                  svg {
                      margin-right: 10px;
                  }
              `}
`;
