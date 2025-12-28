function nivelRanqueada(vitorias, derrotas) {
    let saldoDePartidas = vitorias - derrotas;
    let nivel;

    if (saldoDePartidas <= 10) {
        nivel = "Ferro";
    } else if (saldoDePartidas >= 11 && saldoDePartidas <= 20) {
        nivel = "Bronze";
    } else if (saldoDePartidas >= 21 && saldoDePartidas <= 50) {
        nivel = "Prata";
    } else if (saldoDePartidas >= 51 && saldoDePartidas <= 80) {
        nivel = "Ouro";
    } else if (saldoDePartidas >= 81 && saldoDePartidas <= 90) {
        nivel = "Diamante";
    } else if (saldoDePartidas >= 91 && saldoDePartidas <= 100) {
        nivel = "Lendário";
    } else if (saldoDePartidas > 101) {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoDePartidas} está no nível de ${nivel}`;
}

let vitorias = 90;
let derrotas = 5;

console.log(nivelRanqueada(vitorias, derrotas));