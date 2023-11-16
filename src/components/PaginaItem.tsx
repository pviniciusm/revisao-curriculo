import styled from "styled-components";
import { Pagina } from "../models/pagina";

interface PaginaItemProps {
    page: Pagina;
}

const PaginaItemStyled = styled.a`
    color: #333;
    margin-right: 6px;
`;

export function PaginaItem(props: PaginaItemProps) {
    return (
        <PaginaItemStyled href={props.page.url}>
            <span>{props.page.nome}</span>
        </PaginaItemStyled>
    );
}
