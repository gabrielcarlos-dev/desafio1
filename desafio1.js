const nomeDoHeroi = "Pac";
let xpHeroi = 5000;
let elo;

switch (true) {
    case xpHeroi >= 0 && xpHeroi <= 1000:
        elo = "Bronze";
        break;
    case xpHeroi > 1001 && xpHeroi <= 2000:
        elo = "Prata";
        break;
    case xpHeroi > 2001 && xpHeroi <= 5000:
        elo = "Ouro";
        break;
    case xpHeroi > 6001 && xpHeroi <= 7000:
        elo = "Platina";
        break;
    case xpHeroi > 7001 && xpHeroi <= 8000:
        elo = "Diamante";
        break;
    case xpHeroi > 8001 && xpHeroi <= 9000:
        elo = "Mestre";
        break;
    case xpHeroi > 9001 && xpHeroi <= 10000:
        elo = "Grão-Mestre";
        break;
    case xpHeroi >= 10000:
        elo = "Lendário";
        break;
    default:
        elo = "XP inválido";
        break;
}

console.log(`O herói ${nomeDoHeroi} possui ${xpHeroi} de XP e seu elo é ${elo}.`);