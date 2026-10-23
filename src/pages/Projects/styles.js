import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
    text-align: center;
    font-size: 60px;
    color: #93cdd4;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);
`;

export const Section = styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px 80px;
`;

export const Case = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    margin-top: 60px;
`;

export const Shot = styled.div`
    border: 5px solid #4DFFF3;
    border-radius: 20px;
    min-height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #4DFFF3;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);

    order: ${(props) => (props.$inverso ? 1 : 0)};

    transition: all 0.6s ease;

    &:hover{
        box-shadow: 0 0 700px rgba(0, 229, 255, 0.8);
    }
`;

export const Name = styled.h2`
    font-size: 30px;
    margin-bottom: 14px;
    color: #4DFFF3;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);
`;

export const Description = styled.p`
    font-size: 18px;
    margin-bottom: 16px;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
`;

export const Tag = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.$cor};
    padding: 2px 12px;
    border: 2px solid currentColor;
    border-radius: 10px;
`;

export const Button = styled.a`
    display: inline-block;
    color: #93cdd4;
    background: #0A0A12;
    border: 4px solid #2B3A67;
    border-radius: 10px;
    padding: 8px 14px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
    transition: all 0.6s ease;
    margin: 0 10px 10px 0;

    &:hover{
        border-color: #4DFFF3;
        box-shadow: 0 0 14px rgba(0, 229, 229, 0.7);
    }
`;
