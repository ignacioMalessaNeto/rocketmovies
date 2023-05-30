import  styled  from "styled-components";

export const Container = styled.textarea`
    width: 1116px;
    height: 280px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    border: none;
    resize: none;

    border-radius: 10px;

    padding: 16px;

    cursor: pointer;

    margin: 40px 0;

    &::placeholder {
		color: ${({ theme }) => theme.COLORS.GRAY_200}

	}
`;