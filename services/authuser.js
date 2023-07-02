const UserDAO = require('../data-access-object/user')
const bcrypt = require('bcrypt')

async function login(email, password) {
    try {
        const user = await UserDAO.FindUserByEmail(email)

        const match = await bcrypt.compare(password, user.password)
        if (match) {
            return {id: user.id, roles: user.roles}
        }
        else {
            return Promise.reject('wrong password')
        }
    }
    catch(err) {
        return Promise.reject('user not found')
    }
}

module.exports = {login}