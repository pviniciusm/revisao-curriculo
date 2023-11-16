import { Pagina } from "../models/pagina";
import { PaginaItem } from "./PaginaItem";

export function HeaderPaginas() {
    const paginas: Pagina[] = [
        {
            nome: "Home",
            url: "",
        },
        {
            nome: "Resumo",
            url: "",
        },
        {
            nome: "Linguagens",
            url: "",
        },
        {
            nome: "Projetos",
            url: "",
        },
    ];

    return (
        <div>
            {paginas.map((item) => (
                <PaginaItem page={item} />
            ))}
        </div>
    );
}
