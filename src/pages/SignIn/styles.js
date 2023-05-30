import  styled  from "styled-components";

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;

    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 134px;

    display: flex;
    
    flex-direction: column;

    align-items: start;

    justify-content: center;

    text-align: center;


    button{
        margin-top: 24px;
    }

    .buttons{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        margin-left: 180px;
    }

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_50};
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        padding: 48px 0;
    }

   
`;

export const BackgroundImg = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;