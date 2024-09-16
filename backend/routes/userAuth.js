const jwt = require('jsonwebtoken'); // Corrected import statement

const authenticatetoken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer token 

    if (token == null) {
        return res.status(401).json({ message: "Authentication Token required!" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            return res.status(403).json({ message: "Token is Expired. Sign-In again" });
        }
        req.user = user;
        next();
    });
};

module.exports = { authenticatetoken };