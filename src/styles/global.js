import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'SUSE', Sans-Serif;
        text-decoration: none;
    }

    body {
        overflow-x: hidden;
    }
`;

export default Global;