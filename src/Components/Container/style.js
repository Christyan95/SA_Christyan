import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 12rem;

    /* @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 2rem;
    } */
`;

export const PerfilPic = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    border: 15px solid #000;
    box-shadow: 5px 7px 25px rgba(0, 0, 0, 0.5);
`;

export const Img = styled.img`
    height: 100%;
    width: 100%;
    transition: 0.5s;

    &:hover {
        transform: scale(1.3);
    }
`;

export const HomeContent = styled.div`
    max-width: 500px;
    margin-left: 200px;
    display: flex;
    flex-direction: column;

    /* @media (max-width: 768px) {
        padding: 40px 0;
    } */
`;

export const H5 = styled.h5`
    color: #e5e5e5;
    font-size: 20px;
`;

export const Area = styled.span`
    color: #5A147B;
    font-size: 26px;
`;

export const H1 = styled.h1`
    color: #AD00FF;
`;

export const P = styled.p`
    color: #e5e5e5;
    font-size: 20px;
`;

export const HomeSci = styled.div`
    
`;

export const A = styled.a`
    
`;

export const Icon = styled.i`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: transparent;
    border: 2px solid #AD00FF;
    border-radius: 50%;
    font-size: 30px;
    color: #5A147B;
    text-decoration: none;
    margin: 30px 15px 30px 0;
    transition: .5s ease;

    &:hover {
        background: #000;
        color: #AD00FF;
        box-shadow: 0 0 20px #5A147B;
        transform: rotate(360deg);
    }
`;

export const BtnGroup = styled.div`
    margin: 45px 0;

    &:active {
        border-color: #AD00FF;
    }
`;

export const ABtnBox = styled.a`
    display: inline-block;
    padding: 12px 28px;
    background: #000;
    border-radius: 40px;
    font-size: 16px;
    color: #5A147B;
    letter-spacing: 1px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 0 5px #AD00FF, 0 0 25px #AD00FF;
    transition: .5s ease;

    &:hover {
        box-shadow: 0 0 5px #AD00FF, 0 0 25px #AD00FF, 0 0 50px #AD00FF, 0 0 100px #AD00FF, 0 0 200px #AD00FF;
    }
`;