import styled from "styled-components";

const HeaderIconeStyled = styled.div`
    height: 60px;
    width: 60px;

    border-radius: 50%;
    background-image: url("./src/assets/daphne.jpeg");
    background-size: cover;
`;

export function HeaderIcone() {
    return <HeaderIconeStyled></HeaderIconeStyled>;
}
