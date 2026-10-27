import styled from 'styled-components';

export const Container = styled.div``;

export const About = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 30px;
    padding: 20px;
    color: #93cdd4;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);
    margin-bottom: 60px;
    
    @media (min-width: 760px){
        font-size: 60px;
        padding: 0;
    }
`;
export const Paragraph = styled.p`
    color: #ffffffbe;
    text-shadow: 0 0 10px rgba(224, 227, 227, 0.9);
    font-size: 20px;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Span = styled.span`
    color: #4DFFF3;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);
`;

export const SpanInitial = styled.span`
    color: #4DFFF3;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);
    font-size: 40px;
`;
