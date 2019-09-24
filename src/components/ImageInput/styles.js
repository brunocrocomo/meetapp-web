import styled from 'styled-components';

export const Container = styled.div`
    width: 940px;
    height: 300px;
    margin-bottom: 20px;

    label {
        cursor: pointer;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        width: 940px;
        height: 300px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.4);
        color: rgba(255, 255, 255, 0.3);

        &:hover {
            opacity: 0.7;
        }

        div {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

            svg {
                margin-bottom: 10px;
            }

            strong {
                font-size: 20px;
            }
        }

        img {
            align-self: center;
            width: 940px;
            height: 300px;
            border-radius: 4px;
            object-fit: cover;
        }

        input {
            display: none;
        }
    }
`;
