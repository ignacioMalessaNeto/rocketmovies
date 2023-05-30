import styled from 'styled-components';

export const Container = styled.span`
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    color: ${({ theme}) => theme.COLORS.GRAY_500};
    background-color: ${({ theme}) => theme.COLORS.GRAY_300};
    font-family: 'Roboto Slab', serif;
`;

