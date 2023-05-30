import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    

    > header {
        display: flex;

        align-items: end;

        width: 100%;
        height: 140px;

        background-color:  rgba(255, 133, 155, 0.05);
    }

    > button{
        width: 80px;
    }

    a {
        padding-left: 140px;
        margin-bottom: 20px;
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    >  div:nth-child(4){
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -120px auto 32px;
    width: 186px;
    height: 186px;


    >img{
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }

    >label{
        width: 48px;
        height: 48px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;
    }

    input{
        display: none;
    }
    
    svg{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        width: 20px; 
        height: 20px;
    }
    
`;