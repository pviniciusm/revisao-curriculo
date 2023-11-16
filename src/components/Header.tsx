import styled from "styled-components";
import { HeaderIcone } from "./HeaderIcone";
import { HeaderPaginas } from "./HeaderPaginas";

const HeaderStyled = styled.div`
    background-color: #b1b1b1;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;
    padding: 16px;
`;

export function Header() {
    return (
        <HeaderStyled>
            <HeaderIcone />
            <HeaderPaginas />
        </HeaderStyled>
    );
}
