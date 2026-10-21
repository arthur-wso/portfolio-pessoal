import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 60px;
    color: #93cdd4;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);
`;

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 0 300px;

    img {

        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    h3 {
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const Article = styled.article`
    margin-top: 50px;
    border: 5px solid #4DFFF3;
    border-radius: 20px;
    padding: 20px;
    color: #fff;
    

/*    img {
        width: 100px;
        display: block;
        margin: 0 auto;
        margin-bottom: 20px;
        border-radius: 20px
    }*/

    h3 {
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
        color: #4DFFF3;
        text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);
    }
`;
export const Paragraph = styled.p`
    font-size: 20px;
    text-align: center;
`;
