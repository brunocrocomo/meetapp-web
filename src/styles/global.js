import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 14px 'Helvetica', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    textarea, input {
        background: rgba(0, 0, 0, 0.2);
        height: 50px;
        margin: 0 0 10px;
        border: 0;
        border-radius: 4px;
        padding: 0 20px;
        color: #fff;
        font-size: 18px;

        &::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
    }
`;
