const nomes = [];

while (true) {
    const nome = prompt("Digite um nome ou 'sair' para encerrar):")
    if (nome.toLowerCase() === "sair") {
        break;
    }
    nomes.push(nome);
}

alert("Nomes que foram inseridos:");
for (let i = 0; i < nomes.length; i++) {
    alert(`${i + 1}: ${nomes[i]}`);
}

for (let nome of nomes) {
    alert(`Bem-vindo(a), ${nome}!`);
}
