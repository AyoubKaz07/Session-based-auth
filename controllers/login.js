const authuser = require('../services/authuser')

const loginHandler = async (req, res) => {
    const {email, password} = req.body;
    // check if the credentials are provided
    if (!email || !password) {
        return req.status(400).send('Please Provide Credentials')
    }
    // check if the credentials are correct
    try {
        const user = await authuser.login(email, password);
        req.session.user = user
        console.log(req.session.user)
        res.status(200).send('you are now logged in');
    } catch(err) {
        console.error(err)
        res.status(401).json(err)
    }

};

module.exports = loginHandler;