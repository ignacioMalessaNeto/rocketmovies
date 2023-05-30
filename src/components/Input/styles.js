import styled from "styled-components";

export const Container = styled.div`
    > input {
    display: flex;
    align-items: center;
    width: 630px;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;
    border: none;
    padding: 19px 0 19px 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;