const response = require("../controllers/response");
const Password = require("../utils/password");
const Users = require("../repositories/users");

const obterUsuario = async (ctx) => {
	const { email = null } = ctx.params;
	if (email) {
		const result = await Users.obterUsuario(email);
		if (result) {
			return response(ctx, 200, result);
		}
		return response(ctx, 404, { message: 'Usuario não encontrado' });
	}

	return response(ctx, 400, { message: 'Mal formatado' });
};


module.exports = { obterUsuario }