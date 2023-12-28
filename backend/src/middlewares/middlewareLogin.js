const middlewareLogin = (req, res, next) => {
    try {
        const isBodyValid = (userName, email, password) => userName && email && password;
        const {userName, email, password} = req.body;
        if (!isBodyValid(userName, email, password)) {
            return res.status(400).json({message: 'Some required fields are missing'})
        }
        next();
    } catch (error) {
        console.error(err.message);
        return res.sendStatus(401);
    }
}

module.exports = {
    middlewareLogin
}