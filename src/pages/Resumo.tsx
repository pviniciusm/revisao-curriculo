import styled from "styled-components";
import { ResumoImagem } from "../components/ResumoImagem";

const ResumoStyled = styled.div`
    background-color: beige;
`;

export function Resumo() {
    return (
        <ResumoStyled>
            <ResumoImagem
                descricao="Foto do resumo"
                urlImagem="./src/assets/daphne.jpeg"
            />

            <div> informações </div>
        </ResumoStyled>
    );
}
