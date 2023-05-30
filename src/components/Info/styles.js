import styled from "styled-components";

export const Container = styled.section`
    margin: 28px 0;
    h2 {
    margin-bottom: 24px;
    line-height: 47px;
    font-size: 36px;
    font-weight: 500;
    font-family: 'Roboto Slab', serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
    }

    div {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    > footer {
        width: 100%;
        display: flex;
        gap: 8px;       
        margin-bottom: 24px;
    }
`;


export const ButtonStar = styled.button`
    background: none;
    border: none;
    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        width: 20px;
        height: 20px;
    }
`;

export const Stars = styled.div`
    display: flex;
    background: none;
    border: none;
    margin-bottom: 24px;
    width: 100px;
`;

export const Data = styled.div`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    color:${({ theme }) => theme.COLORS.GRAY_100};
    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;


export const TimeAndAvatar = styled.div`
    display: flex;
    align-items: center;
`;

export const Creator = styled.div`
    display: flex;
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
        color:${({ theme }) => theme.COLORS.GRAY_100}       
    }

    > a {
        color:${({ theme }) => theme.COLORS.WHITE};
        font-style: none;
    }

`

export const Text = styled.p`
    text-align: justify;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    line-height: 21px;
    font-weight: 400;
`;