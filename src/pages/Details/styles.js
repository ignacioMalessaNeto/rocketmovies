import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid; 
    grid-template-rows: 116px, auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        padding: 64px 0;
        overflow-y: hidden;
    }

`;

export const Tags = styled.ul`
    list-style: none;
    gap: 8px;
    display: flex;
    padding-bottom: 20px;
    > li{
        margin-top: 40px;
    }

        a{
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
`;


export const Creator = styled.div`
    display: flex;
    align-items: center;
    color:${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 40px;

   
    > p {
        color:${({ theme }) => theme.COLORS.GRAY_100};
    }

    img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px;
        border-style: solid;
        border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    button {
        background: none;
        border: none;
        color:${({ theme }) => theme.COLORS.WHITE};
        font-style: none;
    }

`

export const Data = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    color:${({ theme }) => theme.COLORS.GRAY_100};
    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;


export const Content = styled.div`
    max-width: 1000px;
    max-height: 410px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;

    padding-right: 24px;

    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
    }
  
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 5px;
    }
    
`;