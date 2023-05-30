import styled from 'styled-components';

export const Container = styled.button`
    border-radius: 16px;
    height: 222px;
    width: 100%;

    border: none;
    
    background-color: rgba(255, 133, 155, 0.05);;

    margin-bottom: 24px;

    padding: 32px;

    > h1{
        display: flex;
        justify-content: start;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.WHITE}; 
    }

    > p {
        color: #999591;
        max-height: 46px;
        text-align: justify;
        overflow-y: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 30px;
    }

    > div {
        display: flex;
        margin: 8px 0 15px 0;

    }

    svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        width: 20px;
        height: 20px;
    }


    > footer {
        width: 100%;
        display: flex;
        gap: 8px;
        margin-top: 24px;
    }

`;

