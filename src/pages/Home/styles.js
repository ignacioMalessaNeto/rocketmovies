import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    width: 100%;
    height: 100vh;

    overflow-y: hidden;
`; 


export const Content = styled.div`
    padding: 0 200px;
    
    
    >div{
        display: flex;
        justify-content: space-between;
        margin: 50px 0 40px 0;
    }

    

    > h1 {
        font-size: 32px;
        line-height: 42px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    };

    

    > main {
        max-height: 350px;
        overflow-y: auto;
        gap: 20px;
        padding-right: 24px;
    }

    
    main::-webkit-scrollbar {
        width: 8px;
    }
  
    main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 5px;
    }
   
`;


export const ButtonAdd = styled(Link)`
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
`;