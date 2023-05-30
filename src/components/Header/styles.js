import  styled  from 'styled-components';

export const Container = styled.header`

    grid-area: header;

    height: 116px;

    width: 100%;

    border-bottom-width: 1px;

    border-bottom-style: solid;

    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};

    display: flex;

    justify-content: space-between;

    padding: 0 140px;

    align-items: center;


    button { 
        text-decoration: none;
        display: flex;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        align-items: center;
        font-family: 'Roboto Slab', serif;
        background: none;
        border: none;
    }

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    margin-right: 50px;
    
    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;        
    }

    > a {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE}
    }

    
`;

export const Logout = styled.button`
    background: none;
    border: none;
    display: flex;
    justify-content: end;

    a {
        display: flex;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-weight: 400;
        text-decoration: none;
        padding-left: 20px;
    }
`;

export const Brand = styled.div`
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px;
        border-style: solid;
        border-color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    img:hover{
        filter: brightness(0.9);
        cursor: pointer;
    }
 
    strong:hover{
        filter: brightness(0.9);
        cursor: pointer;
    }

    > a {
        font-weight: 700;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE}
    }
`;

