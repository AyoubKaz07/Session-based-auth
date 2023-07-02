const bcrypt = require('bcrypt')

// Just training without database
const users = {
    'user1@gmail.com': {
        id: '12351514',
        roles: ['ADMIN'],
        password: bcrypt.hashSync('123', 10)
    },
    'user2@gmail.com': {
        id: '123515qsa14',
        roles: ['ADMIN'],
        password: bcrypt.hashSync('1234', 10)
    }

}

const FindUserByEmail = async (email) => {
    const user = users[email]
    return user ? user : Promise.reject('User not found')
}

module.exports = {FindUserByEmail}