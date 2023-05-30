import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    padding: 16px 0;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border: none;

    border-radius: 10px;

    font-weight: 500;
`;