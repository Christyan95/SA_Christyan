import styled from 'styled-components';

export const Nav = styled.nav`
    list-style-type: none;
    font-size: 26px;

    /* @media (max-width: 930px) {
        position: absolute;
        top: 110px;
        right: -100%;
        bottom: 0;
        width: 60%;
        height: 100vh;
        background-color: #222;
        z-index: 3;
        box-shadow: 5px 13px 30px rgba(0, 0, 0, 0.1);
        transition: 0.5s;
        padding: 25px 0px;
    } */
`;

// export const New = styled.div`
//     width: 35px;
//     height: 35px;
//     position: absolute;
//     top: 45px;
//     right: 3%;
//     z-index: 5;
//     cursor: pointer;
//     display: none;

//     @media (max-width: 930px) {
//         display: initial;
//     }
// `;

// export const Span = styled.span`
//     display: block;
//     background-color: #007ced;
//     margin: 5px 0px;
//     width: 100%;
//     height: 3px;
//     transition: 0ms.3s;
//     transition-property: transform, opacity;

//     @media (max-width: 930px) {
//         position: absolute;
//         margin-top: 12px;
//     }
// `;

export const Ul = styled.ul`

`;

export const Li = styled.li`
    display: inline-block;

    /* @media (max-width: 930px) {
        display: block;
    } */
`;

export const A = styled.a`
    color: #e5e5e5;
    margin-right: 2.5rem;

    &:hover {
        color: #0ef;
    }

    /* @media (max-width: 930px) {
        display: block;
        margin-bottom: 15px;
        text-align: center;
    } */
`;