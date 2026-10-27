import styled from 'styled-components';

export const StyledNav = styled.div`
    width: 100%;
    min-height: 90px;
    background: rgba(6, 22, 37, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #2B3A67;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 100;
    margin-bottom: 50px;
    flex-wrap: wrap;
    padding: 12px 0;

    @media (min-width: 760px) {
        gap: 60px;
    }
`;

export const Link = styled.a`
    color: #93cdd4;
    background: #0A0A12;
    border: 4px solid #2B3A67;
    border-radius: 10px;
    padding: 10px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
    text-shadow: 0 0 6px rgba(0, 229, 255, 0.6);
    transition: all 1s ease;
    cursor: pointer;

    &:hover{
    box-shadow: 0 0 14px rgba(0, 229, 255, 0.7);
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.9);
    border-color: #4DFFF3;
    }
`;
