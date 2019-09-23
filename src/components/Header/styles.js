import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.3);
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 92px;
    max-width: 940px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        align-items: center;

        img {
            height: 32px;
            width: 31px;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    div {
        text-align: right;
        margin-right: 30px;

        strong {
            display: block;
            font-size: 14px;
            color: #fff;
        }

        a {
            margin-top: 2px;
            font-size: 14px;
            color: #999;
        }
    }

    button {
        width: 71px;
        height: 42px;
        font-size: 16px;
    }
`;
