function nivelHeroi(vitorias, derrotas) {
  const nome = "Code Conqueror";

  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias >= 101) {
    nivel = "Imortal";
  } else if (vitorias >= 91) {
    nivel = "Lendário";
  } else if (vitorias >= 81) {
    nivel = "Diamante";
  } else if (vitorias >= 51) {
    nivel = "Ouro";
  } else if (vitorias >= 21) {
    nivel = "Prata";
  } else if (vitorias >= 11) {
    nivel = "Bronze";
  } else if (vitorias <= 10) {
    nivel = "Ferro";
  }

  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
  );
}

nivelHeroi(32, 50);
