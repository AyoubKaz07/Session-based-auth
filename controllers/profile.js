const GetProfile = (req, res) => {
    res.json(req.session);
};

module.exports = GetProfile;