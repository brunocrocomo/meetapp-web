import styled from 'styled-components';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
        }

        textarea {
            height: 200px;
            padding-top: 20px;
            border: 0;
            resize: none;
        }

        span {
            color: #f64c75;
            align-self: flex-start;
            margin: 0 0 10px 5px;
            font-weight: bold;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;

            align-self: flex-end;
            width: 180px;
            margin-top: 10px;
        }
    }
`;
