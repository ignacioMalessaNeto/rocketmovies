import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    align-items: center;

    display: grid;

    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content"
    ;
    overflow: hidden;

    >main{
        overflow: hidden;
    }

`; 

export const Form = styled.form`
    max-width: 1300px;
    max-height: 500px;
    margin: 40px 100px;
    overflow-y: auto;

    padding-right: 5px; 

    &::-webkit-scrollbar {
        width: 8px;
        
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 5px;

    }

    >h2{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    .buttons{
        width: 1113px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 40px;
    }

    .inputs{
        gap: 40px;
        width: 100%;
        display: flex;
        margin-top: 40px;
    }

    .inputSearch{
        width: 536.5px;
    }

    .bookmarks{
        margin: 24px 0;
        display: flex;
        width: 1113px;
        height: 88px;
        border-radius: 10px;

        align-items: center;
        background: ${({ theme }) => theme.COLORS.BLACK};
    }

    >header{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }   
`;

export const ButtonAdd = styled.button`
    width: 536.5px;
    height: 50px;
    padding: 17.50 auto;
    background:  ${({ theme }) => theme.COLORS.BLACK};
    border: none;
    border-radius: 10px;
    
    a{
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};   
        text-decoration: none;
    }
`;

export const ButtonRemove = styled.button`
    width: 536.5px;
    padding: 17.50 auto;
    background:  ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 10px;
    font-weight: 500;
    
    a{
        font-weight: 500;
        color:  ${({ theme }) => theme.COLORS.BLACK};  
        text-decoration: none;
    }
`;
