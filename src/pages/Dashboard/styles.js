import styled from 'styled-components';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;

    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            color: #fff;
            font-size: 32px;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 172px;

            svg {
                margin-right: 10px;
            }
        }
    }

    ul {
        display: grid;
        grid-gap: 10px;
        margin-top: 50px;
    }
`;

export const Meetup = styled.li`
    cursor: pointer;

    padding: 20px 30px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    opacity: ${props => (props.past ? 0.5 : 1)};

    strong {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
    }

    span {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.6);
    }

    svg {
        margin-left: 30px;
        vertical-align: bottom;
    }
`;
