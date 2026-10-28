import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h2`
    color: #fff;
    text-align: center;
    font-size: 30px;
    padding: 0 20px;
    color: #93cdd4;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);

    @media (min-width: 760px) {
        font-size: 60px;
        padding: 0;
    }
`;

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 0 20px;

    img {

        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    h3 {
        text-align: center;
        margin-bottom: 20px;
    }

    @media (min-width: 760px) {
        max-width: 1100px;
        margin: 0 auto;
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Article = styled.article`
    margin-top: 50px;
    border: 5px solid #4DFFF3;
    border-radius: 20px;
    padding: 20px;
    color: #fff;
    height: auto;
`;

export const Paragraph = styled.p`
    font-size: 20px;
`;
