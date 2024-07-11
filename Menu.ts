import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong,
                    "<-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><->");
        console.log("                                                      ");
        console.log("                   UNIVERSO OTAKU                     ");
        console.log("                                                      ");
        console.log("<-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><->");
        console.log("                                                      ");
        console.log("             [1] Criar Produto                        ");
        console.log("             [2] Exibir todos os Produtos             ");
        console.log("             [3] Buscar Produto por Id                ");
        console.log("             [4] Atualizar Dados do Produto           ");
        console.log("             [5] Remover Produto                      ");
        console.log("             [6] Sair                                 ");
        console.log("                                                      ");
        console.log("<-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><-><->");
        console.log("                                                      ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.redstrong,
                "\nUniverso Otaku - Tudo para o verdadeiro fã de anime!");
                console.log(colors.fg.redstrong +
                    `
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⡿⠿⠿⠿⠿⢿⣿⣿⣷⣦⣄⣀⣤⣶⣶
                ⠀⠀⠀⠀⠀⣰⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣿⣿⠟⠋
                ⠀⠀⠀⠀⣼⣿⡿⠃⠀⢀⣤⣾⣿⣿⣿⣿⣷⣦⣄⠀⠀⠈⠉⠀⠀⠀
                ⠀⠀⠀⣸⣿⡿⠁⠀⢠⣿⣿⠟⠉⠀⠉⠉⠛⢿⣿⣷⡄⠀⠀⠀⠀⠀
                ⠀⠀⢀⣿⣿⡇⠀⠀⣾⣿⡟⠀⠀⢀⣤⣄⠀⠀⠹⣿⣿⡄⠀⠀⠀⠀
                ⠀⠀⣾⣿⣿⡇⠀⠀⢻⣿⣷⡀⠀⠘⣿⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀
                ⠀⣼⣿⡿⣿⣿⡄⠀⠈⠻⣿⣿⣷⣿⣿⡿⠃⠀⢀⣿⣿⡇⠀⠀⠀⠀
                ⣰⣿⣿⠁⠹⣿⣿⣦⡀⠀⠈⠉⠛⠋⠉⠀⠀⣠⣾⣿⡟⠀⠀⠀⠀⠀
                ⣿⣿⣧⣤⣤⣬⣿⣿⣿⣶⣦⣤⣤⣤⣴⣶⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀
                ⠙⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀
                    `
                + colors.reset);
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset);


                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nExibir todos os Produtos\n\n", colors.reset);
   
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Produtos - por Id\n\n", colors.reset);


                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);
    

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.red,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log(colors.fg.redstrong + "\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    console.log(colors.fg.redstrong + "Projeto Desenvolvido por: " + colors.fg.redstrong + "Gabrielli Virgilio ");
    console.log(colors.fg.redstrong + "Generation Brasil - " + colors.fg.redstrong + "gabivirgilio@outlook.com");
    console.log(colors.fg.redstrong + "GitHub: " + colors.fg.redstrong + "https://github.com/gabisvs");
    console.log(colors.fg.redstrong + "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=" + colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();