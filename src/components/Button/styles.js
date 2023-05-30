import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    margin-top:  20px;

    border: 0;
    font-weight: 500;

    display: flex;
    gap: 8px;
    background: none;
    align-items: center;

    &:disabled {
        opacity: 0.5;
    }
    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        size: 20px;
    }
`;