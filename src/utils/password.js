const bcrypt = require('bcryptjs');

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash('vouserdev', salt, (err2, hash) => {
        
    });
});

const check = async(password, hash) => {
    const compare = await bcrypt.compare(password, hash);
    console.log('a resposta é ', compare);
    return compare;

};
const encrypt = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, 10);
    return hash;
};



module.exports = { check, encrypt}