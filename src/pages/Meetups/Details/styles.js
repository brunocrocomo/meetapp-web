import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
            color: #fff;
            font-weight: bold;
            font-size: 32px;
        }

        aside {
            display: flex;
        }
    }

    button#edit {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 116px;
        background: #4dbaf9;

        &:hover {
            background: ${darken(0.2, '#4dbaf9')};
        }

        svg {
            margin-right: 10px;
        }
    }

    button#cancel {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 138px;
        margin-left: 15px;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Meetup = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
    max-width: 940px;

    img {
        align-self: center;
        width: 940px;
        height: 300px;
        border-radius: 4px;
        margin-bottom: 25px;
        object-fit: cover;
    }

    p {
        font-size: 18px;
        color: #fff;
        line-height: 32px;
        margin-bottom: 30px;
    }

    div {
        font-size: 14px;
        color: #ffffff;
        opacity: 0.6;
        display: flex;
        flex-direction: row;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 30px;
        }

        svg {
            margin-right: 10px;
        }
    }
`;
