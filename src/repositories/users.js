const database = require('../utils/database');

const obterUsuario = async (email) => {

    if(!email){
        return null;
    } 
        const query = `SELECT * FROM users WHERE email = $1`;
	const result = await database.query({
        text: query,
        values: [email],
    });
    console.log(result.rows[0])
    return result.rows[0];
};

module.exports = { obterUsuario };