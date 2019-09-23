import styled from 'styled-components';
import { MdAddCircleOutline } from 'react-icons/md';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        hr {
            border: 0;
            height: 1px;
            background: rgba(255, 255, 255, 0.2);
            margin: 10px 0 20px;
        }

        button {
            display: flex;
            align-items: center;
            align-self: flex-end;

            justify-content: center;
            width: 162px;
            margin-top: 10px;
        }
    }
`;

export const AddIcon = styled(MdAddCircleOutline)`
    margin-right: 10px;
`;
