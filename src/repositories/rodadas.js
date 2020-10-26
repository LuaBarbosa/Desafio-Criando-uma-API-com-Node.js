const dataBase = require('../utils/database');

const obterRodada = async (rodada) => {
    if(!rodada){
        return null;
    }

    const query = `SELECT * FROM jogos WHERE rodada = null`;
    const result = await dataBase.query({
        text: query,
        values: [rodada],
    });
  console.log(result)
    return result;
};

module.exports = { obterRodada };
