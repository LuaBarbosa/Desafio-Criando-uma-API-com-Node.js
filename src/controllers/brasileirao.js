const jogos = require("../repositories/Jogos");

const tabela = []

const ordenarTabela = () => {
    tabela.sort((a,b) => {
        if(a.pontos > b.pontos){
            return -1;
        }else if(b.pontos > a.pontos) {
            return 1;
        } else {
            if(a.vitorias > b.vitorias){
                return -1;
            }else if (b.vitorias > a.vitorias){
                return 1;
            } else {
                const saldoA = a.golsFeitos - a.golsSofridos;
                const saldoB = b.golsFeitos - b.golsSofridos;
                if(saldoA > saldoB){
                    return -1;
                } else if (saldoB > saldoA){
                    return 1;
                }else {
                    if(a.golsFeitos> b.golsFeitos){
                        return -1;
                    }else if (b.golsFeitos > a.golsFeitos){
                        return 1;
                    }else {
                        a.nome.localCompare(b.nome);
                            return tabela;
                    };
                };
            };
        };
    });

};

const atualizarJogos = (nome, pontos, golsFeitos, golsSofridos) => {
    const timeEncontrado = tabela.find(time => time.nome === nome);
    if(timeEncontrado){
        timeEncontrado.pontos += pontos;
        timeEncontrado.jogos++;
        timeEncontrado.vitoria += pontos === 3 ? 1 : 0;
        timeEncontrado.derrotas += pontos === 0 ? 1 : 0;
        timeEncontrado.empates += pontos === 1 ? 1: 0;
        timeEncontrado.golsFeitos += golsFeitos;
        timeEncontrado.golsSofridos += golsSofridos;
    } else {
        obterJogos.push ({
            nome, 
            pontos, 
            jogos: 1, 
            vitoria: pontos === 3 ? 1 : 0,
            derrotas: pontos === 0 ? 1 : 0,
            empates: pontos === 1 ? 1: 0, 
            golsFeitos,
            golsSofridos
        });
    };

};

const calcularPontos = (obterJogos) => {
 for (jogo of obterJogos) {
     if (jogo.gols_casa > jogo.gols_visitante){
        atualizarJogos(jogo.time_casa, 3, jogo.gols_casa, jogo.gols_visitante);
        atualizarJogos(jogo.time_visitante, 0, jogo.gols_visitante, jogo.gols_casa);
     } else if (jogo.gols_casa < jogo.gols_visitante){
        atualizarJogos(jogo.time_casa, 0, jogo.gols_casa, jogo.gols_visitante);
        atualizarJogos(jogo.time_visitante, 3, jogo.gols_visitante, jogo.gols_casa);
     } else {
        atualizarJogos(jogo.time_casa, 1, jogo.gols_casa, jogo.gols_visitante);
        atualizarJogos(jogo.time_visitante, 1, jogo.gols_visitante, jogo.gols_casa);
     }
 };
   
};

calcularPontos(obterJogos);
atualizarJogos();
ordenarTabela();
console.log (tabela);