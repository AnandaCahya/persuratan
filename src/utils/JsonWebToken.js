import jwt from "jsonwebtoken";

module.exports = {
    generate: (userId) => {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            time: Date(),
            userId: userId,
        };

        const token = jwt.sign(data, jwtSecretKey);

        return token;
    },
    verify: (token) => {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        try {
            const verified = jwt.verify(token, jwtSecretKey);

            if (verified) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    },
};