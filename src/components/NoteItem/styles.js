import styled from 'styled-components';

export const Container = styled.div`
    
    height: 60px;
    padding: 16px;
    display: flex;
    align-items: center;

    background: ${({ theme, isnew }) => (isnew ? "transparent" : theme.COLORS.BACKGROUND_700)};
    border: ${({ theme, isnew }) => (isnew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none")};
    margin: 16px;
    border-radius: 10px;

    .isNew {
        font-size: 16px;
        max-width: 130px;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};  
    }

    .notNew{
        max-width: 70px;
        background: ${({theme}) => theme.COLORS.BACKGROUND_700};
        font-size: 16px;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE}; 
        width: min-content;

    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

     button {
        border: none;
        background: none;
    }

    svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-size: 24px;
    }
`;


