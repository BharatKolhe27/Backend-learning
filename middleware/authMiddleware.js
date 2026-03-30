const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No token provided'
            });
        }

        if (token !== "valid-token") {
            return res.status(403).json({
                success: false,
                message: 'Invalid token'
            });
        }

        req.user = {
            id: 1,
            name: "Pushkar"
        };

        next();

    } catch (error) {
        next(error);
    }
};

module.exports = authMiddleware;