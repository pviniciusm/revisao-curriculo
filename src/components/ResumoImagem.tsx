import styled from "styled-components";

interface ResumoImagemProps {
    urlImagem: string;
    descricao: string;
}

const ResumoImagemStyled = styled.img`
    width: 260px;
`;

export function ResumoImagem(props: ResumoImagemProps) {
    return <ResumoImagemStyled src={props.urlImagem} alt={props.descricao} />;
}
