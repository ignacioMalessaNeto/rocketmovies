import  styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-bottom: 8px;
    border-radius: 10px;

    svg {
        margin-left: 16px;
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        
        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

    }

`;